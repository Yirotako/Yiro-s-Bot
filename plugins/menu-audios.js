import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './allmenu.png';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
 ╭━     🍆 𝙔𝙄𝙍𝙊𝙎 𝘽𝙊𝙏 🍆
 ┃➤
 ┃➤    𝗛ola, ${taguser}
 ┃➤
 ┃➤ 𝗗𝘂𝗲𝗻̃𝗼 : 𝙔𝙄𝙍𝙊 🍆
 ┃➤ 𝗚𝗿𝘂𝗽𝗼 𝗗𝗲 𝗠𝗶 𝗗𝘂𝗲𝗻̃𝗼 : https://www.instagram.com/shadow.vz/
 ┃➤ 𝗡𝘂𝗺𝗲𝗿𝗼 𝗗𝗲 𝗠𝗶 𝗗𝘂𝗲𝗻̃𝗼 : wa.me/5215636167834
 ┃➤ 𝗙𝗲𝗰𝗵𝗮 : ${date}
 ╰━━━━━━━━━━━━━
 
 ╭━      🍆 𝑨𝒖𝒅𝒊𝒐𝒔 𝙔𝙄𝙍𝙊𝙎 𝘽𝙊𝙏 🍆 
 ┃➤ ${usedPrefix}Quien es tu sempai botsito 7w7
 ┃➤ ${usedPrefix}Te diagnostico con gay
 ┃➤ ${usedPrefix}No digas eso papu
 ┃➤ ${usedPrefix}A nadie le importa
 ┃➤ ${usedPrefix}Fiesta del admin
 ┃➤ ${usedPrefix}Fiesta del administrador 
 ┃➤ ${usedPrefix}Vivan los novios
 ┃➤ ${usedPrefix}Feliz cumpleaños
 ┃➤ ${usedPrefix}Noche de paz
 ┃➤ ${usedPrefix}Buenos dias
 ┃➤ ${usedPrefix}Buenos tardes
 ┃➤ ${usedPrefix}Buenos noches
 ┃➤ ${usedPrefix}Audio hentai
 ┃➤ ${usedPrefix}Chica lgante
 ┃➤ ${usedPrefix}Feliz navidad
 ┃➤ ${usedPrefix}Vete a la vrg
 ┃➤ ${usedPrefix}Pasa pack Bot
 ┃➤ ${usedPrefix}Atencion grupo
 ┃➤ ${usedPrefix}Marica quien
 ┃➤ ${usedPrefix}Murio el grupo
 ┃➤ ${usedPrefix}Oh me vengo
 ┃➤ ${usedPrefix}tio que rico
 ┃➤ ${usedPrefix}Viernes
 ┃➤ ${usedPrefix}Baneado
 ┃➤ ${usedPrefix}Sexo
 ┃➤ ${usedPrefix}Hola
 ┃➤ ${usedPrefix}Un pato
 ┃➤ ${usedPrefix}Nyanpasu
 ┃➤ ${usedPrefix}Te amo
 ┃➤ ${usedPrefix}Yamete
 ┃➤ ${usedPrefix}Bañate
 ┃➤ ${usedPrefix}Es puto
 ┃➤ ${usedPrefix}La biblia
 ┃➤ ${usedPrefix}Onichan
 ┃➤ ${usedPrefix}Mierda de Bot
 ┃➤ ${usedPrefix}Siuuu
 ┃➤ ${usedPrefix}Epico
 ┃➤ ${usedPrefix}Shitpost
 ┃➤ ${usedPrefix}Rawr
 ┃➤ ${usedPrefix}UwU
 ┃➤ ${usedPrefix}:c
 ┃➤ ${usedPrefix}a
 ╰━━━━━━━━━ 𝙔𝙄𝙍𝙊𝙎 𝘽𝙊𝙏 ━━━━`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
