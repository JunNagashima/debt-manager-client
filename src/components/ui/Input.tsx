'use client';

import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  className?: string;
  name?: string;
  id?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  label,
  error,
  disabled = false,
  required = false,
  fullWidth = false,
  className = '',
  name,
  id,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input changed:', e.target.value);
    onChange?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log('Input blurred:', e.target.value);
    onBlur?.(e);
  };

  const wrapperClass = [
    styles.input,
    fullWidth ? styles['input--full-width'] : '',
    error ? styles['input--error'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass}>
      {label && (
        <label htmlFor={id} className={styles.input__label}>
          {label}
          {required && <span className={styles.input__required}>*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        required={required}
        className={styles.input__field}
      />
      {error && <span className={styles.input__error}>{error}</span>}
    </div>
  );
};
