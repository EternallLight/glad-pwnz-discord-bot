import { Guild } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v4/structures/guild.ts";
import { ChannelTypes } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v4/types/channel.ts";

export let guild: Guild;
export const guildCreate = async (g: Guild) => {
  console.log(`Found myself in the ${g.name} guild`);
  guild = g;

  for (const channel of g.channels.values()) {
    if (channel.type !== ChannelTypes.GUILD_TEXT) {
      continue;
    }
    channel.sendMessage('Hello there!');
    break;
  }
}
