import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '*[βππππβ] πΈπ½ππ΄πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄ π³π΄ ππππ°ππΈπΎ π³π΄ ππ½ ππππ°ππΈπΎ π³π΄ ππΈπΊππΎπΊ*', m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let Mystic = `
*ππππ°ππΈπΎ:* ${json.result.username}
*π½πΎπΌπ±ππ΄:* ${json.result.nickname}
*ππ΄πΆππΈπ³πΎππ΄π:* ${json.result.followers}
*ππ΄πΆππΈπ³πΎπ:* ${json.result.followings}
*π»πΈπΊπ΄π:* ${json.result.likes}
*ππΈπ³π΄πΎπ:* ${json.result.video}
*π³π΄ππ²ππΈπΏπ²πΈπΎπ½:* ${json.result.bio}
`.trim()
conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false)
} catch (e) {
throw '*[βππππβ] π΄πππΎπ, π½πΎ ππ΄ π΄π²πΎπ½πππΎ π΄π» π½πΎπΌπ±ππ΄ π³π΄ ππππ°ππΈπΎ πΈπ½πΆππ΄ππ°π³πΎ*'
}}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
export default handler
