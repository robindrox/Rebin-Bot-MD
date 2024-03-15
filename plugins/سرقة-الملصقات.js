import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw '*قم بلاشارة للملصق لي عاوز تخليه بحقوقك وحط حقوقك جنب الامر*';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '*[❗معلومة❗] قم بالرد على الملصق الذي تريد سرقته*';
    const img = await m.quoted.download();
    if (!img) throw '*[❗معلومة❗] قم بالرد على الملصق الذي تريد سرقته*';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw '*[❗معلومة❗] عذرًا، حدث خطأ ما... تأكد من أنك قمت بالرد على أحد الملصقات وأضفت اسم الحزمة واسم المستخدم*';
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^سرقه$/i;
export default handler;
