import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.sendButton(m.chat, '*[β] π½πΎ π΄πππ°π π΄π½ π½πΈπ½πΆππ½π° πΏπ°πππΈπ³π° π³π΄ πππ΄π π΄π½ ππ°ππ°*', wm, null, [['πΈπ½πΈπ²πΈπ°π ππ°π»π° π³π΄ πΉππ΄πΆπΎ', `${usedPrefix}ttt partida nueva`]], m)
delete conn.game[room.id]
await m.reply('*[ β ] ππ΄ π΄π»πΈπΌπΈπ½πΎ π»π° ππ°π»π° π³π΄ πΉππ΄πΆπΎ π³π΄ πππ΄π π΄π½ ππ°ππ°*')}
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
export default handler
