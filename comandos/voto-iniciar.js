let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner, participants }) => {
let username = conn.getName(m.sender)
let users = participants.map(u => conn.decodeJid(u.id))
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) await conn.sendButton(m.chat, `*TodavΓ­a hay votos en este chat.!*`, dorre, null, [
                ['π±πΎπππ°πποΈ', `${usedPrefix}-vote`]
            ], m)
            let caption = `π°β*Μ₯β *El admin ${username} ha comenzado una votaciΓ³n*
            
β *${usedPrefix}listvote* - comprobar votos 
β *${usedPrefix}delvote* - borrar votacion`
            const sections = [
{
title: `πππππ ππ ππππππππ`,
rows: [
{title: "γ β γππππ π πππππ", 
rowId: `#upvote`},
{title: "γ β γππππ ππ ππππππ", 
rowId: `#devote`},
]}, ]
const listMessage = {
text: caption,
footer: wm,
title: null,
mentions: users,
buttonText: "ππΌππΌββππβπΌ πΈβππΜ",
sections }
await conn.sendMessage(m.chat, listMessage, { quoted: m})
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['votar *<razΓ³n>*']
handler.tags = ['vote']
handler.command = /^(vote|votar)$/i
handler.admin = true
handler.group = true

export default handler
