import fetch from 'node-fetch'
import axios from 'axios'
import { tiktok } from "social_media_downloader"
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!args[0]) throw 'Masukkan Link'
try {
let p = await tiktok(args[0])
    if (!p.link) throw 'Can\'t download video!'
    let cap = `*ã ð¹ á´ Éª á´ á´ á´ á´ ã*
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
                 âââââââââââââââ
ââââââââââ âã¤âã¤ ââã¤ â·ã¤â» ââââââââââ
*Nickname:* ${p.dev}
*Description:* ${p.description}
*Url:* ${p.url}
_Â©WH-MODS-BOT-V1ð­_
`.trim()
conn.send2ButtonVid(m.chat, p.link, cap, author, `Donasi`, `.donasi`, `Audio`, `.tta ${args[0]}`, fakes, adReply)
} catch (e) {
    throw eror
    }
}
handler.help = ['ttksocial'].map(v => v + ' <url>')

handler.command = /^(ttksocial)$/i
export default handler
