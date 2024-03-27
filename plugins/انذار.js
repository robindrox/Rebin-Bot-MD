const handler = async (m, {conn, text, command, usedPrefix}) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ?
      m.mentionedJid[0] :
      m.quoted ?
      m.quoted.sender :
      text;
  } else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'Sin motivo';
  const msgtext = text || dReason;
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `*[❗] ضع علامة على شخص ما أو قم بالرد على رسالة جماعية لتحذير المستخدم*\n\n*—◉ مثال:*\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who) {
    throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  }
  user.warn += 1;
  await m.reply(
      `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
      } تلقى تحذيرا في هذه المجموعة!\nالسبب: ${sdms}\n*التحذيرات ${
        user.warn
      }/3*`,
      null,
      {mentions: [who]},
  );
  if (user.warn >= 3) {
    if (!bot.restrict) {
      return m.reply(
          '*[❗معلومة❗] مالك الروبوت ليس لديه قيود ممكّنة (تمكين التقييد)، اتصل به لتمكينه*',
      );
    }
    user.warn = 0;
    await m.reply(
        `لقد حذرتك عدة مرات!!\n*@${
          who.split`@`[0]
        }* لقد تجاوزت *3* تحذيرات، الآن سيتم القضاء عليك/ي👽`,
        null,
        {mentions: [who]},
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = /^(advertir|انذار)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
