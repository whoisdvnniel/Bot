import fetch from 'node-fetch'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ π΄π» ππ΄πππΎ πππ΄ π³π΄ππ΄π΄ π±πππ²π°π, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} Hola*`
let vn = await fetch(`https://fatiharridho.herokuapp.com/api/search/ringtone?query=${text}`)
let x = await vn.json()
conn.sendMessage(m.chat, { audio: { url: x.result[0].audio }, mimetype: 'audio/mp4' }, {quoted: m})
}
handler.command  = ['ringtone']
export default handler
