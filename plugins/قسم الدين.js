let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`*⌘━──≼━━「🌸」━━≽──━⌘*
       *˼☜┆قــســم الــديـــن ┆ :↡*
*⌘━──≼━━「🌸」━━≽──━⌘*
*˼‏♣️˹ »  .اذكار الصباح*
*˼‏♣️˹ »  .اذكار المساء*
*˼‏♣️˹ »  .دعاء السفر*
*˼‏♣️˹ »  .قران*
*˼‏♣️˹ »  .ايه*
*˼‏♣️˹ »  .الله*
*˼‏♣️˹ »  .اذان*
*˼‏♣️˹ »  .حديث*
*˼‏♣️˹ »  .دين*
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
handler.command = ['ق2'] 
export default handler
