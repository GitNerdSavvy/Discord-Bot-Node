import dotenv from "dotenv"
import { Client, GatewayIntentBits, Message } from "discord.js";
dotenv.config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (Message) => {
  if (Message.author.bot) return;
  Message.reply({
    content: "Hello from Bot001, You will get reply from the author soon",
  });
});
client.on("interactionCreate", (interaction) => {
  // console.log(interaction);
  interaction.reply("Hello, I am Sanjeev Yadav and I own this server, leave a query or issues it will be resolved soon");
});

client.login(process.env.Discord_env);
