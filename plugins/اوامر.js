import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')



let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {


let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = 
        global.db.data.users[m.sender];
    let { min, xp, max } = xpRange(user.level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let sn = createHash('md5').update(who).digest('hex')
    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(900) 
    const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
const caption =`*⌘━──≼━━「🌸」━━≽──━⌘*
*🌸╎مرحبا بكم في بوت روبين╎🌸*
*⌘━──≼━━「🌸」━━≽──━⌘*
*🌸╎اسم البوت『』*
*🌸╎اهلا بك『${taguser}』*
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

*〘🌸┋البوت في التطوير حالياً┋🌸〙*
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

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
    const time = moment.tz('Egypt').format('HH')
    let res = "بداية يوم سعيده ☀️"
    if (time >= 4) {
        res = "صباح الخير 🌄"
    }
    if (time >= 10) {
        res = "مساء الخير ☀️"
    }
    if (time >= 15) {
        res = "مساء الخير 🌇"
    }
    if (time >= 18) {
        res = "مساء الخير 🌙"
    }
    return res
}
