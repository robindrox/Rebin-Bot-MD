const handler = async (m, {command, usedPrefix, text}) => {
  const M = m.constructor;
  const which = command.replace(/agregar/i, '');
  if (!m.quoted) throw '*[❗معلومة❗] الرد على نص أو رسالة أو صورة وما إلى ذلك. وأضف نصًا بكلمة رئيسية*';
  if (!text) throw `*[❗معلومة❗] يستخدم *${usedPrefix}list${which}* لعرض قائمة الرسائل`;
  const msgs = global.db.data.msgs;
  if (text in msgs) throw `*[❗معلومة❗] '${text}' تم تسجيله في قائمة رسائل الدكتور`;
  msgs[text] = M.toObject(await m.getQuotedObj());
  m.reply(`*[❗𝐈𝐍𝐅𝐎❗] تمت إضافة الرسالة بنجاح إلى قائمة رسائل '${text}'*\n*الوصول مع ${usedPrefix}ver${which} ${text}*`);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'add' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/;
handler.rowner = true;
export default handler;
