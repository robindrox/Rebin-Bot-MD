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
          url: 'https://telegra.ph/file/a2a1de6434ce22177b26b.mp4'
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
