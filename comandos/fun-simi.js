import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ ππ½ ππ΄πππΎ πΏπ°ππ° π·π°π±π»π°π π²πΎπ½ ππΈπΌππΈπΌπΈ πΎ π΄π» π±πΎπ*\n\n*π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} Hola bot*`
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
m.reply(json.success)}
handler.help = ['simi', 'bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i
export default handler
