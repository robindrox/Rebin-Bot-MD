import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `*[❗معلومة❗] أدخل الاسم الذي تريده أن يكون اسم المجموعة الجديد*`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw '*[❗معلومة❗] عذرًا، حدث خطأ، لا يمكن أن يزيد الاسم عن 25 حرفًا*';
  }
};
handle = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(تغير-الاسم)$/i;
handler.group = true;
handler.admin = true;
export default handler;
