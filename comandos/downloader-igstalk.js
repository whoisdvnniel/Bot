import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ ππππ°ππΈπΎ π³π΄ ππ½ ππππ°ππΈπΎ π³π΄ πΈπ½πππ°πΆππ°πΌ, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} luisitocomunica*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`
${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* ππ΄πΆππΈπ³πΎππ΄π
*${followingH}* ππ΄πΆππΈπ³πΎπ
*${postsH}* πΏππ±π»πΈπ²π°π²πΈπΎπ½π΄π
*π±πΈπΎ:* ${description}
`.trim())
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk)$/i
export default handler
