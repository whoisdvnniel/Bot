import TicTacToe from '../lib/tictactoe.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*[β] π°ππ½ π΄πππ°π π΄π½ ππ½ πΉππ΄πΆπΎ π²πΎπ½ π°π»πΆππΈπ΄π½*'
if (!text) throw `*[β] ππ΄ ππ΄πππΈπ΄ππ΄ πΏπΎπ½π΄π ππ½ π½πΎπΌπ±ππ΄ π° π»π° ππ°π»π° π³π΄ πΉππ΄πΆπΎ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ*\n*β ${usedPrefix + command} nueva sala*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
await m.reply('*[πΉοΈ] πΈπ½πΈπ²πΈπ° π΄π» πΉππ΄πΆπΎ, ππ½ πΉππΆπ°π³πΎπ ππ΄ ππ½πΈπΎ π° π»π° πΏπ°πππΈπ³π°*')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: 'β',
O: 'β­',
1: '1οΈβ£',
2: '2οΈβ£',
3: '3οΈβ£',
4: '4οΈβ£',
5: '5οΈβ£',
6: '6οΈβ£',
7: '7οΈβ£',
8: '8οΈβ£',
9: '9οΈβ£',
}[v]})
let str = `π πΉππ΄πΆπΎ πππ΄π π΄π½ ππ°ππ° | π»π° ππΈπ΄πΉπ°
π« *πΉππΆπ°π³πΎππ΄π*:
*βββββββββ*
β = @${room.game.playerX.split('@')[0]}
β­ = @${room.game.playerO.split('@')[0]}
*βββββββββ*
        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}
*βββββββββ*
ππππ½πΎ π³π΄ @${room.game.currentTurn.split('@')[0]}
`.trim()
if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: m })
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
if (text) room.name = text     
let imgplay = './Menu2.jpg'
conn.sendButton(m.chat, `π ππππ ππ ππππ | ππ πππππ

β’ π΄ππΏπ΄ππ°π½π³πΎ π°π» ππ΄πΆππ½π³πΎ πΉππΆπ°π³πΎπ πΏππ΄π³π΄ π΄π½πππ°π π²πΎπ½ π΄π» π±πΎππΎπ½ π³π΄ π°π±π°πΉπΎ πΎ π΄π» π²πΎπΌπ°π½π³πΎ *${usedPrefix + command} ${text}*

β’ πΏπ°ππ° π±πΎπππ°π πΎ ππ°π»πΈπππ΄ π³π΄ π»π° πΏπ°πππΈπ³π° πππ΄π½ π΄π» π²πΎπΌπ°π½π³πΎ
*${usedPrefix}delttt*`, wm, imgplay, [['ππ½πΈπππ΄ π° π»π° πΏπ°πππΈπ³π°', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler
