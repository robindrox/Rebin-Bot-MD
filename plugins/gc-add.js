const {generateWAMessageFromContent, prepareWAMessageMedia, proto} = (await import('@whiskeysockets/baileys')).default;
import fetch from 'node-fetch';
const {getBinaryNodeChild, getBinaryNodeChildren} = (await import('@whiskeysockets/baileys')).default;
const handler = async (m, {conn, text, participants, args}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] يمتلك المالك تقييدًا (تمكين تقييد/تعطيل تقييد) باستخدام هذا الأمر*';
  if (!args[0]) throw '*[❗] أدخل رقم المستخدم الذي تريد إضافته*';
  try {
    const _participants = participants.map((user) => user.id);
    const users = (await Promise.all(
        text.split(',')
            .map((v) => v.replace(/[^0-9]/g, ''))
            .filter((v) => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async (v) => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter((v) => v[1][0]?.exists).map((v) => v[0] + '@c.us');
    const response = await conn.query({tag: 'iq', attrs: {type: 'set', xmlns: 'w:g2', to: m.chat}, content: users.map((jid) => ({tag: 'add', attrs: {}, content: [{tag: 'participant', attrs: {jid}}]}))});
    const pp = await conn.profilePictureUrl(m.chat).catch((_) => null);
    const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0);
    const add = getBinaryNodeChild(response, 'add');
    const participant = getBinaryNodeChildren(add, 'participant');
    for (const user of participant.filter((item) => item.attrs.error == 403)) {
      const jid = user.attrs.jid;
      const content = getBinaryNodeChild(user, 'add_request');
      const invite_code = content.attrs.code;
      const invite_code_exp = content.attrs.expiration;
      const teks = `*[❗معلومة❗] لم يكن من الممكن إضافة إلى @${jid.split('@')[0]}, قد يحدث هذا بسبب أن الرقم غير صحيح، أو أن الشخص قد غادر المجموعة مؤخرًا أو قام الشخص بتكوين خصوصية مجموعته، أو تم إرسال الدعوة إلى المجموعة إلى المستخدم في حسابه الخاص*`;
      m.reply(teks, null, {mentions: conn.parseMention(teks)});
      const captionn = `Hey!! Hola, me presento, soy The Mystic - Bot, y soy un Bot para WhatsApp, una persona del grupo utilizo el comando para añadirte al grupo, pero no pude agregarte, asi que te mando la invitacion para que te agregues, te esperamos!!`;
      const messaa = await prepareWAMessageMedia({image: jpegThumbnail}, {upload: conn.waUploadToServer});
      const groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({groupInviteMessage: {groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail}}), {userJid: jid});
      await conn.relayMessage(jid, groupInvite.message, {messageId: groupInvite.key.id});
    }
  } catch {
    throw '*[❗معلومة❗] 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙰𝙽̃𝙰𝙳𝙸𝚁 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝚀𝚄𝙴 𝙸𝙽𝙶𝚁𝙴𝚂𝙾, 𝙴𝚂𝚃𝙾 𝙿𝚄𝙴𝙳𝙴 𝙾𝙲𝚄𝚁𝚁𝙸𝚁 𝙿𝙾𝚁𝚀𝚄𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙴𝚂𝚃𝙴 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾, 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚂𝙴 𝙷𝙰𝚈𝙰 𝚂𝙰𝙻𝙸𝙳𝙾 𝚁𝙴𝙲𝙸𝙴𝙽𝚃𝙴𝙼𝙴𝙽𝚃𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙾 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝙷𝙰𝚈𝙰 𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙳𝙾 𝚂𝚄 𝙿𝚁𝙸𝚅𝙰𝙲𝙸𝙳𝙰𝙳 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂, 𝚃𝙴 𝙰𝙲𝙾𝙽𝚂𝙴𝙹𝙰𝙼𝙾𝚂 𝙴𝙽𝚅𝙸𝙰𝙻𝙴 𝙻𝙰 𝙸𝙽𝚅𝙸𝚃𝙰𝙲𝙸𝙾𝙽 𝙼𝙰𝙽𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴!!*';
  }
};
handler.help = ['add', '+'].map((v) => v + ' número');
handler.tags = ['group'];
handler.command = /^(add|agregar|añadir|\+)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;
