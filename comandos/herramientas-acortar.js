import axiostal from "axios"
import fetch from 'node-fetch'
let handler = async(m, { conn, text, xteamkey }) => {
if (!text) throw '*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ / πππ» π΄π» π²ππ°π» π³π΄ππ΄π° π°π²πΎπππ°π*'
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `*π»πΈπ½πΊ π°π²πΎπππ°π³πΎ π²πΎππ΄π²ππ°πΌπ΄π½ππ΄!!*\n\n*π»πΈπ½πΊ π°π½ππ΄ππΈπΎπ:*\n${text}\n*π»πΈπ½πΊ π°π²πΎπππ°π³πΎ:*\n*${json.result}*`.trim()   
m.reply(hasil)
}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
export default handler
