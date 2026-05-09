FROM mcr.microsoft.com/devcontainers/typescript-node:4-24-trixie

ARG CLAUDE_CODE_VERSION=latest

# Claude Code のインストール
RUN npm install -g @anthropic-ai/claude-code@${CLAUDE_CODE_VERSION}

ENV PATH="/usr/local/bin:/usr/local/sbin:/usr/sbin:/usr/bin:/sbin:/bin"
