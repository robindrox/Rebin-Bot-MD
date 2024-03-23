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
      const captionn = `*يا!! مرحبًا، أنا 𝑅𝑂𝐵𝐼𝑁 - 𝐵𝑂𝑇 ، أحد الأشخاص في المجموعة استخدم الأمر لإضافتك إلى المجموعة، لكن لم أستطع إضافتك، لذلك أرسل لك الدعوة لتضيف نفسك، نحن في انتظارك!!*`;
      const messaa = await prepareWAMessageMedia({image: jpegThumbnail}, {upload: conn.waUploadToServer});
      const groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({groupInviteMessage: {groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail}}), {userJid: jid});
      await conn.relayMessage(jid, groupInvite.message, {messageId: groupInvite.key.id});
    }
  } catch {
    throw '*[❗معلومة❗] لم يكن من الممكن إضافة الرقم الذي أدخلته، قد يحدث هذا لأن الرقم غير صحيح، أو أن الشخص قد غادر المجموعة مؤخرًا أو قام الشخص بتكوين خصوصية المجموعة الخاصة به، ننصحك بإرسال الدعوة يدويًا !!*';
  }
};
handler.help = ['add', '+'].map((v) => v + ' número');
handler.tags = ['group'];
handler.command = /^(add|agregar|añadir|\+)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;
