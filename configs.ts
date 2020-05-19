export const configs = {
  prefix: Deno.env.get('DISCORDENO_PREFIX') || "!",
  token: Deno.env.get('DISCORDENO_TOKEN') || "",
  botID: Deno.env.get('DISCORDENO_BOTID') || "",
}
