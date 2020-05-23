import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v4/structures/message.ts";
import { botCache } from "../../mod.ts";

import { guild } from "../events/guildCreate.ts";

// To be developed...

export const kickCommand = (message: Message) => {
  const author = guild.members.get(message.author.id);
  // console.log(author);

  // if (author && author.hasPermissions(['KICK_MEMBERS'])) {
  //   message.mentions.forEach(async (mention) => {
  //     for (let [key, value] of guild.members.entries()) {
  //       console.log(`${key}: ${JSON.stringify(value)}`);
  //     }
  //     const member = await guild.getMember(mention.id);
  //     // console.log(member);
  //     // member && member.kick();
  //   })
  // }
};

botCache.commands.set(`kick`, {
  callback: kickCommand,
});

