import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";

export const meowCommand = (message: Message) => {
  return message.channel.sendMessage(
    'MEOWWW!!! 😸',
  );
};

botCache.commands.set(`meow`, {
  dmOnly: true,
  callback: meowCommand,
});

botCache.commandAliases.set('meowww', 'meow');
