let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(` *هيا بنا ${toM(a)}لنكن اصدقاء*
*${toM(b)}, هل توافق لتكونو اصدقاء جدد؟*\n\n\*ملاحظه ده منشن عشوائي للمرح فقط اذ لم يعجبك الأمر إذن ماتستخدمش الامر💗*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['صداقة']
handler.group = true
export default handler
