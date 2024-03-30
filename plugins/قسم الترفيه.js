let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`*⌘━──≼━━「🌸」━━≽──━⌘*
       *˼☜┆قـسـم الـتـرفـيـه┆ :↡*
*⌘━──≼━━「🌸」━━≽──━⌘*
*˼‏♣️˹ »  .هل*
*˼‏♣️˹ »  .لو*
*˼‏♣️˹ »  .صراحة*
*˼‏♣️˹ »  .زواج*
*˼‏♣️˹ »  .طلاق*
*˼‏♣️˹ »  .صداقة*
*˼‏♣️˹ »  .تحداني*
*˼‏♣️˹ »  .توب*
*˼‏♣️˹ »  .ميمز*
*˼‏♣️˹ »  .مقولات*
*˼‏♣️˹ »  .حكمه*
*˼‏♣️˹ »  .الحب*
*˼‏♣️˹ »  .شبيهي*
*˼‏♣️˹ »  .ورع*
*˼‏♣️˹ »  .خروف*
*˼‏♣️˹ »  .اهبل*
*˼‏♣️˹ »  .جميل*
*˼‏♣️˹ »  .شخصية*
*˼‏♣️˹ »  .ذكاء*
*˼‏♣️˹ »  .بوست*
*˼‏♣️˹ »  .اقتباس*
*⌘━──≼━━「🌸」━━≽──━⌘*`


await conn.sendMessage( m.chat, {
        video: {
          url: 'https://telegra.ph/file/ba47cb2dbd7afa1547ea5.mp4'
        },
        caption: caption,
        gifPlayback: true,
        gifAttribution: Math.floor( Math.random( ) * 2 ) + 1
      }, {
        quoted: m
      } );
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['ق3'] 
export default handler
