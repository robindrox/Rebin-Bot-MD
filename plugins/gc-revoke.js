/* Creditos a https://github.com/ALBERTO9883 */

const handler = async (m, {conn}) => {
  const revoke = await conn.groupRevokeInvite(m.chat);
  await conn.reply(m.chat, `🔹️ *_تمت إعادت تعيين رابط المجموعة بنجاح._*\n♾ • رابط جديد: ${'https://chat.whatsapp.com/' + revoke}`, m);
};
handler.command = ['رستر'];
handler.botAdmin = true;
handler.admin = true;
handler.group = true;
export default handler;
