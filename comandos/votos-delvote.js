let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `โ ๏ธ *_No hay votaciones activas en este grupo!_*`, wm, null, [
    ['๐๐พ๐๐ฐ๐๐ฆ', `${usedPrefix}vote`],
    ['๐ผ๐ด๐ฝ๐ฬ๐ฐ', `${usedPrefix}menu`]
], m)
    delete conn.vote[id]
    m.reply(`๐ฅ *_Votaciรณn acabada con รฉxito._*`)
}
handler.help = ['delvote']
handler.tags = ['vote']
handler.command = /^(del|hapus|-)vote$/i

export default handler
