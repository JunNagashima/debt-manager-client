'use client';

import { useState, useMemo } from 'react';
import styles from './PasswordStrengthInput.module.scss';

interface PasswordStrengthInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

type StrengthLevel = 'weak' | 'medium' | 'strong' | null;

export default function PasswordStrengthInput({
  value,
  onChange,
  placeholder = '8文字以上'
}: PasswordStrengthInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const strength = useMemo((): { level: StrengthLevel; width: string; text: string } => {
    const length = value.length;
    
    if (length === 0) {
      return { level: null, width: '0%', text: '' };
    } else if (length < 6) {
      return { level: 'weak', width: '33%', text: '弱い' };
    } else if (length < 10) {
      return { level: 'medium', width: '66%', text: '普通' };
    } else {
      return { level: 'strong', width: '100%', text: '強い' };
    }
  }, [value]);

  return (
    <>
      <div className={styles.passwordInput}>
        <input
          type={showPassword ? 'text' : 'password'}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          minLength={8}
          required
        />
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'パスワードを隠す' : 'パスワードを表示'}
        >
          {showPassword ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
      
      {value.length > 0 && (
        <div className={styles.passwordStrength}>
          <div className={styles.passwordStrengthBar}>
            <div
              className={`${styles.passwordStrengthFill} ${
                strength.level ? styles[`passwordStrengthFill--${strength.level}`] : ''
              }`}
              style={{ width: strength.width }}
            />
          </div>
          <span
            className={styles.passwordStrengthText}
            data-strength={strength.level}
          >
            {strength.text}
          </span>
        </div>
      )}
    </>
  );
}
