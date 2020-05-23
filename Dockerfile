# docker build -t denobot .
# docker run --init -i -t -e DISCORDENO_TOKEN="<DISCORD_TOKEN>" -e DISCORDENO_BOTID="<DISCORD_BOT_ID>" denobot

FROM hayd/alpine-deno:1.0.0

WORKDIR /app

# Prefer not to run as root.
USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache mod.ts

CMD ["run", "--allow-read", "--allow-net", "--allow-env", "--unstable", "mod.ts"]
