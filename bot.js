const express = require("express");
const http = require("http");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "aktif");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
client.queue = new Map();
const fs = require("fs");
const db = require("quick.db");
const moment = require("moment");
require("./util/eventLoader")(client);
client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)
});
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

////////////////////////

client.on("message", async message => {
  if (message.content === "gir") {
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
client.on("message", async message => {
  if (message.content === "çık") {
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);

/////////////////////////////////////
///////////////////////////////////////////////////

///////////////////////////////////////////////////

/////////////////////////////////////////////////////

//////////////////////////////////////////////////////
////
////////////////////////
////////////////////////
// TEYIT \\
client.on('guildMemberAdd', async member => {
  await member.addRole(`726516583006077019`) //id yazan yere verilecek rol (unregistered)
  await member.setNickname(`・İsim Yaş`) //yeni gelen kullanıcının adını değiştirme
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = ' <a:ozelX:731117048947802144> Tehlikeli'
} else {
takizaman = ` <a:ozelEv:731117049228689429> Güvenli`}require("moment-duration-format");
 let zaman1 = new Date().getTime() - user.createdAt.getTime()
 const gecen = moment.duration(zaman1).format(` YY [Yıl,] DD [Gün,] HH [Saat,] mm [Dakika,] ss [Saniye]`) 
 let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
 let message = member.guild.channels.find(x => x.id === `728194689848705076`) //id yazan kısma kanal id'si [orn: register-chat]
  const taki = new Discord.RichEmbed()
 .setTitle(
     "M İ R A U S Topluluğuna Hoş Geldin"
   )
   .setDescription(`<a:welcome:730902780318974012>**・** **Sunucumuza Hoş geldin** ${member} 
   
<a:ozelP:730902738178801685>**・Seninle Beraber** ${message.guild.memberCount} **Kişiyiz**

<a:side:730902737205592207>**・** **Kaydının Yapılması İçin V.Confirmed odasına girin!!**

<a:ozelE:730902761763242056>**・**<@&726503973078696007> **Rolündeki Yetkililer Seninle İlgilenecektir**

<a:ozelN:730902779945680906>**・** **Sunucumuzun Sınırsız Davet Bağlantısı** https://discord.gg/5qydtfp


<a:ozelNN:730902739311394847>**・** **Hesap Açılalı** ${gecen} **Olmuş**
<a:ozelEE:730902761767698432>**・** **Bu Kullanıcı** **|** **${takizaman}**
`)
.setColor('#6278c5')
message.send(taki)
 
         });
//---------------------------------KOMUTLAR---------------------------------\\


// TEYIT \\


// SAY \\
client.on("ready", () => {
  client.channels.get("726533613981794304").join();
   //main dosyaya atılacak
})
