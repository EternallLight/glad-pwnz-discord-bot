import { Message } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v4/structures/message.ts";
import {
  logGreen,
  logRed,
} from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v4/utils/logger.ts";
import { configs } from "../../configs.ts";
import { botCache } from "../../mod.ts";
import { cache } from "https://raw.githubusercontent.com/Skillz4Killz/Discordeno/v4/utils/cache.ts";

export const commandHandler = async (message: Message) => {
  // If the message was sent by a bot we can just ignore it
  if (message.author.bot) return;

  const guildID = message.guild_id;

  // Check what the valid prefix is supposed to be for the bot for this guild
  const prefix = checkPrefix(message, guildID);
  // If the message is not using the valid prefix cancel the command
  if (!message.content.startsWith(prefix)) return;

  // Get the first word of the message without the prefix so it is just command name. `!ping testing` becomes `ping`
  const [commandName, ...args] = message.content.substring(prefix.length).split(
    " ",
  );

  // Check if this is a valid command
  const command = checkCommand(commandName);
  if (!command) return;

  const guild = guildID ? cache.guilds.get(guildID) : undefined;
  logCommand(message, guild?.name || "DM", "Ran");
  const inhibitor_results = await Promise.all(
    [...botCache.inhibitors.values()].map((inhibitor) =>
      inhibitor(message, command, guild)
    ),
  );

  if (inhibitor_results.includes(true)) {
    return logCommand(message, guild?.name || "DM", "Inhibibted");
  }

  try {
    await command.callback(message, args, guild);
    // Log that the command ran successfully.
    logCommand(message, guild?.name || "DM", "Success");
  } catch (error) {
    logCommand(message, guild?.name || "DM", "Failed");
    logRed(error);
  }
};

export const checkPrefix = (message: Message, guildID: string | undefined) => {
  const prefix = guildID ? botCache.guildPrefixes.get(guildID) : configs.prefix;
  return prefix || configs.prefix;
};

export const checkCommand = (commandName: string) => {
  const command = botCache.commands.get(commandName);
  if (command) return command;

  // Check aliases if the command wasn't found
  const alias = botCache.commandAliases.get(commandName);
  if (!alias) return;

  return botCache.commands.get(alias);
};

export const logCommand = (
  message: Message,
  guild_name: string,
  type: string,
) => {
  logGreen(`[COMMAND - ${type}] by ${message.author.username} in ${guild_name}`);
};
