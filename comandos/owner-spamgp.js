let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': 'Auto spam β¨οΈ', 'jpegThumbnail': false }}}

  if (!text) throw `${fg}\nπΈπ½πΆππ΄ππ΄ π΄π» π»πΈπ½πΊ π³π΄ ππ½ πΆπππΏπΎ π³π΄ ππ·π°πππ°πΏπΏ`
  let [_, code, expired] = text.match(linkRegex) || []
  if (!code) throw 'El link es invalido'
  let res = await conn.groupAcceptInvite(code)
  //await m.reply(`${JSON.stringify(res, null, 1)}`)
  await m.reply(`*Enviando spam . . .*`)
// Debes de poner tus enlaces abajo.
  await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/HR4yufwFrkeDFxnNwiJiho', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/HR4yufwFrkeDFxnNwiJiho', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/HR4yufwFrkeDFxnNwiJiho', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/HR4yufwFrkeDFxnNwiJiho', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/HR4yufwFrkeDFxnNwiJiho', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
await conn.sendMessage(res, { text: 'https://chat.whatsapp.com/HR4yufwFrkeDFxnNwiJiho', mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fakegif })
  await conn.groupLeave(res)
  await m.reply(`β *ππΏπ°πΌ π΄π½ππΈπ°π³πΎ π²πΎπ½ π΄ππΈππΎ*`)
}

handler.help = ['spamjp']
handler.tags = ['premium']
handler.command = ['spamgp'] 

handler.owner = true

export default handler
