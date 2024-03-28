
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*أدخل الاسم الذي تريده ليكون اسم المجموعة الجديد*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*عذرًا، حدث خطأ، لا يمكن أن يزيد الاسم عن 25 حرفًا*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(تغير-الاسم)$/i
handler.group = true
handler.admin = true
export default handler
