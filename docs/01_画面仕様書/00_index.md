# わりかんノート - 画面仕様書 目次

## 概要

本ドキュメントは、わりかんノートアプリケーションの全画面仕様をまとめたものです。
各画面の詳細仕様は、個別ファイルを参照してください。

## 画面一覧

| No | ファイル名 | 画面ID | 画面名 | 説明 |
|---|---|---|---|---|
| 01 | [01_home.md](./01_home.md) | HOME | ホーム画面 | 残高サマリー、対応待ち、フレンド残高の表示 |
| 02 | [02_balance_detail.md](./02_balance_detail.md) | BALANCE_DETAIL | 残高詳細画面 | 特定フレンドとの残高詳細と取引履歴 |
| 03 | [03_advance_list.md](./03_advance_list.md) | ADVANCE_LIST | 立替申請一覧画面 | 立替申請の送受信管理 |
| 04 | [04_repayment_list.md](./04_repayment_list.md) | REPAYMENT_LIST | 返済記録一覧画面 | 返済の送受信履歴管理 |
| 05 | [05_offset_list.md](./05_offset_list.md) | OFFSET_LIST | 相殺申請一覧画面 | 相殺申請の送受信管理 |
| 06 | [06_history.md](./06_history.md) | HISTORY | 履歴画面 | 全取引履歴の時系列表示 |
| 07 | [07_friends.md](./07_friends.md) | FRIENDS | フレンド画面 | フレンド一覧・申請管理 |
| 08 | [08_settings.md](./08_settings.md) | SETTINGS | 設定画面 | アカウント設定・通知設定など |
| 09 | [09_common_components.md](./09_common_components.md) | - | 共通コンポーネント | 全画面で使用する共通要素 |

## 画面遷移図

```
ホーム画面 (HOME)
├→ 残高詳細画面 (BALANCE_DETAIL)
├→ 立替申請一覧画面 (ADVANCE_LIST)
├→ 返済記録一覧画面 (REPAYMENT_LIST)
├→ 相殺申請一覧画面 (OFFSET_LIST)
├→ 履歴画面 (HISTORY)
├→ フレンド画面 (FRIENDS)
│  └→ 残高詳細画面 (BALANCE_DETAIL)
└→ 設定画面 (SETTINGS)
```

## 技術スタック

- **フレームワーク**: Next.js
- **言語**: TypeScript
- **認証**: JWT (Bearer)
- **API**: REST API

## ドキュメント構成

各画面仕様書には以下の項目が含まれています：

1. **画面ID** - 画面の一意識別子
2. **画面の目的** - この画面が何のために存在するか
3. **表示要素** - 画面に表示される全ての要素
4. **ユーザーアクション** - ユーザーが実行可能な操作
5. **モーダル一覧** - 画面から開くモーダルダイアログ
6. **使用API** - 各操作で使用するAPIエンドポイント

## 関連ドキュメント

- API仕様書（立替、返済、相殺、残高、履歴、フレンド、アカウント）
- モックHTML/CSS/JSファイル

## 更新履歴

| 日付 | バージョン | 更新内容 |
|---|---|---|
| 2025-12-30 | 1.0.0 | 初版作成 |
