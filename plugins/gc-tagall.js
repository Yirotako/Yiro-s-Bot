const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝐅𝐑𝐄𝐄 𝐘𝐈𝐑𝐎𝐒 𝐁𝐎𝐓 ${pesan}`;
  let teks = `𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄 𝐆𝐄𝐘!!\n\n ${oi}\n\n 𝐌𝐄𝐍𝐂𝐈𝐎𝐍𝐄𝐒 𝐘𝐈𝐑𝐎𝐒 𝐅𝐑𝐄𝐄:\n\n`;
  for (const mem of participants) {
    teks += `👾 @${mem.id.split('@')[0]}\n`;
  }
  teks += `𝐅𝐑𝐄𝐄 𝐘𝐈𝐑𝐎𝐒 𝐁𝐎𝐓`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
