import { tmpdir } from 'os'
import path, { join } from 'path'
import {
readdirSync,
statSync,
unlinkSync,
existsSync,
readFileSync,
watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {

conn.reply(m.chat, '*[ β ] π°ππ²π·πΈππΎπ π³π΄ π»π° π²π°ππΏπ΄ππ° ππΌπΏ π΄π»πΈπΌπΈπ½π°π³πΎπ π²πΎπ½ π΄ππΈππΎ!!*', m)

const tmp = [tmpdir(), join(__dirname, '../tmp')]
const filename = []
tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
return filename.map(file => {
const stats = statSync(file)
unlinkSync(file)
})}
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp|cleartemp)$/i
handler.rowner = true
export default handler
