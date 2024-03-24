const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'فتح': 'not_announcement',
    'قفل': 'announcement',
    'فتح': 'not_announcement',
    'قفل': 'announcement',
    'فتح': 'not_announcement',
    'قفل': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
*[❗] يـرجـى تـحـديـد احدى الخـيـارات بالاسـفـل!!*

*┏━━━❲ ✨مثال✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} فتح*
*┠┉↯ ${usedPrefix + command} قفل*
`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('*[ ✔ ] تم تغير اعدادات الجروب بنجاح*');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
