import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v1/structures/message.ts";
import { botCache } from "../../mod.ts";

export const lastPwnageCommand = (message: Message) => {
  return message.channel.sendMessage(
    {
      embed: {
        title: 'Latest pwnage report',
        type: 'rich',
        description: 'The enemy xKRISATXx has been OWNED!!1',
        url: 'https://adengate.ru/',
        color: 15576321,
        author: {
          name: 'xzxGLADDRUPALPWNZxzx'
        },
        fields: [ 
          {
            name: 'Class',
            value: 'Adventurist',
            inline: true
          },
          {
            name: 'Level',
            value: '78',
            inline: true
          },
        ]
      }
    }
  );
};

botCache.commands.set(`lastpwnage`, {
  callback: lastPwnageCommand,
});

botCache.commandAliases.set('lp', 'lastpwnage');
