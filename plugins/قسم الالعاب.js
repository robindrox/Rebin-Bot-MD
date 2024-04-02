let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`*⌘━──≼━━「🌸」━━≽──━⌘*
       *˼☜┆قــســم الالــعــاب┆ :↡*
*⌘━──≼━━「🌸」━━≽──━⌘*
*˼‏♣️˹ »  .فعاليه*
*˼‏♣️˹ »  .لعبة*
*˼‏♣️˹ »  .رياضيات*
*˼‏♣️˹ »  .رهان*
*˼‏♣️˹ »  .رياضه*
*˼‏♣️˹ »  .احزر*
*˼‏♣️˹ »  .عين*
*˼‏♣️˹ »  .ايموجي*
*˼‏♣️˹ »  .سؤال*
*˼‏♣️˹ »  .كت*
*˼‏♣️˹ »  .علم*
*˼‏♣️˹ »  .خمن*
*˼‏♣️˹ »  .فكك*
*˼‏♣️˹ »  .رتب*
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
handler.command = ['ق4'] 
export default handler
