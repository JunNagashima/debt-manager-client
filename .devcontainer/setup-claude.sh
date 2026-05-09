#!/bin/bash

mkdir -p /root/.claude

cat > /root/.claude/settings.json << 'EOF'
{
  "permissions": {
    "allow": [
      "Bash(npm run *)",
      "Bash(bun run *)",
      "Bash(git diff *)",
      "Bash(git log *)",
      "Bash(git status)"
    ],
    "deny": [
      "Read(.env)",
      "Read(.env.*)",
      "Bash(rm -rf *)",
      "Bash(rm -rf .*)",
      "Bash(sudo *)"
    ]
  },
  "enabledPlugins": {},
  "language": "japanese",
  "theme": "dark",
  "showTurnDurations": true
}
EOF

cat > /root/.claude/CLAUDE.md << 'EOF'
# 個人設定

## コーディングスタイル

- コメントは日本語で記述する
- 変数名・関数名は英語で記述する
- エラーメッセージは、英語で記述する

## Git

- コミットメッセージは日本語で記述する
- コミット前に diff を確認する

## 出力

- 回答は日本語で行う
- コード変更時は変更理由を簡潔に説明する
EOF
