FROM node:20.5.0-alpine3.18 as builder

# pnpmのインストール
RUN npm install -g pnpm

# アプリケーションディレクトリを設定
WORKDIR /app

# package.jsonとyarn.lockをコピー
COPY package.json ./
COPY pnpm-lock.yaml ./

# 依存関係をインストール
RUN pnpm install --frozen-lockfile

# アプリケーションのソースコードをコピー
COPY . .

# Nuxtアプリケーションをビルド
RUN pnpm build staging

# 本番用イメージ
FROM node:20.5.0-alpine3.18 as runner

WORKDIR /app

COPY --from=builder /app/.output ./

# 非rootユーザーを作成して使用
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# アプリケーションが使用するポートを公開
EXPOSE 3000

# Nuxtサーバーを起動
CMD ["node", "server/index.mjs"]
