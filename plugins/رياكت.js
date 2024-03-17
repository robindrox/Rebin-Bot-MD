let handler = async (m, { conn, usedPrefix: _p, args, text, usedPrefix}) => {
	
	if (!m.quoted) throw '*ريبلي على الرساله الي عايز البوت يسوي ريكت عليها*'
	if (text.length > 2) throw '*رمز تعبيري واحد*'
	if (!text) throw `*الاستخدام الصحين:*\n${usedPrefix}*تفاعل* 🔥`
conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
},
 text: `${text}`}}, { messageId: m.id })
 }
 handler.help = ['react <emoji>']
handler.tags = ['tools']
handler.command = /^(تفاعل|ريكت)$/i

export default handler
