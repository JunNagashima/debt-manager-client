#!/bin/bash
cat >> ~/.bashrc << 'EOF'

# エイリアス設定
alias ll='ls -la'
alias la='ls -A'
alias gs='git status'
alias gb='git branch'
alias gl='git log --oneline --graph'
alias ..='cd ..'
alias ...='cd ../..'
alias cc='claude'
alias ccc='claude --continue'
EOF
