import fetch from "node-fetch"
import cheerio from "cheerio"

let handler = async (m, {
    text,
    usedPrefix,
    command
}) => {
if (!text) throw `مثال : \n ${usedPrefix + command} berkane`
    try {
            let res = await fetchPrayerTimes(text)
            m.reply(`${Object.entries(res).map(([name, data]) => `Salat *${name}* : ${data}`).join('\n').trim()}`.trim())
        } catch (e) {
            m.reply(eror)
        }
}
handler.help = ['adan،اذان']
handler.tags = ['islam']
handler.command = /^(adan|اذان)$/i
export default handler

async function fetchPrayerTimes(q) {
  const url = 'https://athantime.me/' + q; // Ganti URL_HALAMAN_ADZAN dengan URL halaman web yang berisi informasi jadwal waktu adzan

  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const prayerTimes = {
      اليوم: $('b:contains("الإثنين")').text().trim(), // Mengambil informasi tanggal adzan saat ini
      فجر: $('td:contains("موعد اذان الفجر")').next().text().trim(), // Mengambil waktu adzan Fajr
      ظهر: $('td:contains("موعد اذان الظهر")').next().text().trim(), // Mengambil waktu adzan Dhuhr
      عصر: $('td:contains("موعد اذان العصر")').next().text().trim(), // Mengambil waktu adzan Asr
      مغرب: $('td:contains("موعد اذان المغرب")').next().text().trim(), // Mengambil waktu adzan Maghrib
      عشاء: $('td:contains("موعد اذان العشاء")').next().text().trim(), // Mengambil waktu adzan Isha
      امساك: $('div.imsak li:contains("موعد الامساك اليوم")').text().trim().split(' ')[3], // Mengambil waktu imsak
    };
    return prayerTimes;
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    return null;
  }
}
