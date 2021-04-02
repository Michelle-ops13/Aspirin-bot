module.exports = async client => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Music with Aspirin.", {
    type: "STREAMING" //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};

//start

module.exports = async client => {
  let text = [
    `Version : V 1.2.1`,
    `Design by Aᴜʀɢᴏɴ™`,
    `Pc with ᴀsᴘɪʀɪɴ`,
    `V!help for help`,
    `Servers : ${await client.guilds.cache.size}`,
    `Users : ${await client.users.cache.size}`
  ];

  setInterval(function() {
    let status = text[Math.floor(Math.random() * text.length)];

    client.user.setActivity(status, { type: "STREAMING" });
  }, 3500);

  console.log("Ready");
};
