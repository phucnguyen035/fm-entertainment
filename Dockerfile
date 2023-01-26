FROM node:18-slim as build

# Auth

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN corepack enable
RUN pnpm install --frozen-lockfile
RUN pnpm prisma generate

COPY . .

RUN pnpm build

# Production stage
FROM node:18-slim as production

COPY --from=build package.json ./
COPY --from=build pnpm-lock.yaml ./
COPY --from=build /build /build

RUN corepack enable
RUN pnpm install --frozen-lockfile --production

EXPOSE 3000

CMD ["node", "build/index.js"]
