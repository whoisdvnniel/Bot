
let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `Tidak ada voting digrup ini!`, author, null, [
    ['vote', `${usedPrefix}+vote`],
    ['menu', `${usedPrefix}menu`]
], m)

    let [reason, upvote, devote] = conn.vote[id]
    
let caption = `
\t\t\t\t*β²βπ³οΈ VOTACIONES π³οΈββ²*
γ π£ γRazΓ³n:* ${reason}
\t\t\t*γ β γπππππ π πππππγ β γ*
*Total: ${upvote.length}*
${upvote.map((v, i) => `β’ ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
\t\t*γ β γπππππ ππ ππππππγ β γ*
*Total:* ${devote.length}
${devote.map((v, i) => `β’ ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
`
conn.sendButton(m.chat, caption, wm, false, [['π΅π°ππΎπβ', `/upvote`], ['π²πΎπ½πππ°β', `/devote`]], m, { mentions: conn.parseMention(caption) })
}
handler.help = ['listvote']
handler.tags = ['vote']
handler.command = /^listvote$/i

export default handler
