//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ ضع علامة أو أذكر شخصًا ما\n\n📌 مثال : ${usedPrefix + command} @user`
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `
*[✅] محظور*

*⌭━═≼━━ ❲𝐑𝐎𝐁𝐈𝐍-𝐁𝐎𝐓❳ ━━≽═━⌭*
@${who.split`@`[0]} *لن تتمكن بعد الآن من استخدام أوامري* `, m, { mentions: [who] })
}
handler.help = ['ban @user']
handler.tags = ['owner']
handler.command = /^بان$/i
handler.rowner = true

export default handler
