const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply('*[❗] رسالة وداع تم تكوينها بشكل صحيح لهذه المجموعة*');
  } else throw `*[❗] أدخل رسالة الوداع التي تريد إضافتها, استخدم:*\n*- @مستخدم (منشن)*`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['setbye'];
handler.admin = true;
export default handler;
