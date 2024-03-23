let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`*⌘━──≼━━「🌸」━━≽──━⌘*
*🌸╎مرحبا بكم في بوت روبين╎🌸*
*⌘━──≼━━「🌸」━━≽──━⌘*
*🌸╎اسم البوت『』*
*🌸╎اهلا بك『』*
*🌸╎تصنيفك『』*
*🌸╎الخبره『』*
*🌸╎مستخدمين『』*
*⌘━──≼━━「🌸」━━≽──━⌘*

*˼☜┆أقـسـام اوامـر الـبـوت📄:↡*

*⌘━──≼━━「🌸」━━≽──━⌘*
*˼‏.ق1˹ »  ⌝قسم المجموعات┆🌐⌞*
*˼‏.ق2˹ »  ⌝قسم الدين┆🕋⌞*
*˼‏.ق3˹ »  ⌝قسم الترفيه┆🎡⌞*
*˼‏.ق4˹ »  ⌝قسم الالعاب┆🎮⌞*
*˼‏.ق5˹ »  ⌝قسم البحث┆🪢⌞*
*˼‏.ق6˹ »  ⌝قسم التحويل┆🧰⌞*
*˼‏.ق7˹ »  ⌝قسم الاعضاء┆👥⌞*
*˼‏.ق8˹ »  ⌝قسم الادوات┆⚒️⌞*
*˼‏.ق9˹ »  ⌝قسم الايديت و الصور┆🖼️⌞*
*˼‏.ق10˹ »  ⌝قسم المطور┆⚖️⌞*

*〘🌸┋البوت في التطوير حالياً┋🌸 〙*
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
handler.command = ['اوامر'] 
export default handler
