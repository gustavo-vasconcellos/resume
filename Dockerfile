FROM denoland/deno:alpine-2.4.1

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno cache main.ts
RUN deno run -A dev.ts build

EXPOSE 8000

CMD ["run", "-A", "main.ts"]