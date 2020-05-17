import { Guild } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/guild.ts";
import { ChannelTypes } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/types/channel.ts";

export const guildCreate = async (guild: Guild) => {
  console.log(`Found myself in the ${guild.name} guild`);

  for (const channel of guild.channels.values()) {
    if (channel.type !== ChannelTypes.GUILD_TEXT) {
      continue;
    }
    channel.sendMessage('Hello there!');
    break;
  }
}
