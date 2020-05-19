import { botCache } from "../../mod.ts";

botCache.commands.set('meow', {
  callback: (message) => {
    return message.channel.sendMessage(
      'MEOWWW!!!',
    );
  },
});

botCache.commandAliases.set('meowww', 'meow');
