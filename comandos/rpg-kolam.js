let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {

let name = global.db.data.users[m.sender].name
let level = global.db.data.users[m.sender].level
let exp = global.db.data.users[m.sender].exp
let paus = global.db.data.users[m.sender].paus
let kepiting = global.db.data.users[m.sender].kepiting
let gurita = global.db.data.users[m.sender].gurita
let cumi = global.db.data.users[m.sender].cumi
let buntal = global.db.data.users[m.sender].buntal
let dory = global.db.data.users[m.sender].dory
let lumba = global.db.data.users[m.sender].lumba
let lobster = global.db.data.users[m.sender].lobster
let hiu = global.db.data.users[m.sender].hiu
let udang = global.db.data.users[m.sender].udang
let ikan = global.db.data.users[m.sender].ikan
let orca = global.db.data.users[m.sender].orca
//let wm = global.wm 

let past = `*βγ KOLAM ποΈ γβ*
  
*π Name :* ${name}
*π Level :* ${level}
*β¨ Exp :* ${exp}
ββββββββββββββββ
π³ Paus: *${paus}*   
π¦ Kepiting: *${kepiting}*   
π Gurita: *${gurita}*   
π¦ Cumi: *${cumi}*   
π‘ Buntal: *${buntal}*  
π  Dory: *${dory}*
π¬ Lumba: *${lumba}*
π¦ Lobster: *${lobster}*
π¦ Hiu: *${hiu}*
π¦ Udang: *${udang}*
π Ikan: *${ikan}*
π Orca: *${orca}*
ββββββββββββββββ
π Total Isi: *${paus + kepiting + gurita + cumi + buntal + dory + lumba + lobster + hiu + udang + ikan + orca}* Jenis`
let isi = ` *π¦Kepiting = ${kepiting}*
*π Dory = ${dory}*
*π¦Lobster = ${lobster}*
*πIkan = ${ikan}*
*π¦Udang = ${udang}*
*π¬LumbaΒ² = ${lumba}*
*π¦CumiΒ² = ${cumi}*
*πPaus = ${paus}*
*πGurita = ${gurita}*
*π¦Hiu = ${hiu}*
*π‘Buntal = ${buntal}*
*π³Orca = ${orca}*`.trim()
  conn.sendButton(m.chat, past, `${wm}`, [['Pasar', '#pasar']], m)
  }
  handler.help = ['kotakikan', 'kolam', 'kolamikan']
  handler.tags = ['rpg']
  handler.command = /^(kotak(ikan)?|kolam(ikan)?)$/i
export default handler 
handler.register = true


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)