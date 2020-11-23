const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Berikan donasi seikhlasnya saja buat mimin supaya bisa mengembangi fiture lainnya.
  Terimakasih

Best regards, Ari.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname} Jangan lupa donasi seikhlasnya ya! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

📁 Creator Menu:
🤖 *${prefix}sticker*
🤖 *${prefix}stickergif*
🤖 *${prefix}stickergiphy*
🤖 *${prefix}meme*
🤖 *${prefix}quotemaker*

📁 Islam Menu:
🤖 *${prefix}infosurah*
🤖 *${prefix}surah*
🤖 *${prefix}tafsir*
🤖 *${prefix}ALaudio*
🤖 *${prefix}jsolat*

📁 18++ Menu:
🤖 *${prefix}nekopoi*

📁 Fun Menu (Group):
🤖 *${prefix}simisimi*
🤖 *${prefix}katakasar*
🤖 *${prefix}klasmen*

📁 Download Menu:
🤖 *${prefix}instagram*
🤖 *${prefix}tiktok <Perbaikan>* 
🤖 *${prefix}twitter <Perbaikan>*
🤖 *${prefix}ytmp3*
🤖 *${prefix}ytmp4*

📁 Primbon Menu:
🤖 *${prefix}artinama*
🤖 *${prefix}cekjodoh*

📁 Tugas Menu:
🤖 *${prefix}translate*
🤖 *${prefix}nulis*
🤖 *${prefix}wiki*

📁 Search Any:
🤖 *${prefix}images*
🤖 *${prefix}sreddit*
🤖 *${prefix}resep*
🤖 *${prefix}stalkig*
🤖 *${prefix}cuaca*
🤖 *${prefix}chord*
🤖 *${prefix}lirik*
🤖 *${prefix}ss*
🤖 *${prefix}play*

📁 Random Teks:
🤖 *${prefix}fakta*
🤖 *${prefix}pantun*
🤖 *${prefix}katabijak*
🤖 *${prefix}quote*

📁 Random Images:
🤖 *${prefix}anime*
🤖 *${prefix}kpop*
🤖 *${prefix}memes*

📂 Anime Menu
🤖 *${prefix}whatanime*
🤖 *${prefix}inu*
🤖 *${prefix}neko*

📂Others Menu:
🤖 *${prefix}pokemon*
🤖 *${prefix}toxic*

📁 Info Menu:
🤖 *${prefix}tts*
🤖 *${prefix}resi*
🤖 *${prefix}covidindo*
🤖 *${prefix}ceklokasi*
🤖 *${prefix}shortlink*
🤖 *${prefix}bapakfont*

📁 Tentang Bot:
🤖 *${prefix}tnc*
🤖 *${prefix}donasi*
🤖 *${prefix}botstat*
🤖 *${prefix}ownerbot*
🤖 *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

📁 Owner Bot:
🤖 *${prefix}ban* - banned
🤖 *${prefix}bc* - promosi
🤖 *${prefix}leaveall* - keluar semua grup
🤖 *${prefix}clearall* - hapus semua chat

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

🤖 *${prefix}add*
🤖 *${prefix}kick* @tag
🤖 *${prefix}promote* @tag
🤖 *${prefix}demote* @tag
🤖 *${prefix}mentionAll*
🤖 *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
🤖 *${prefix}kickall*
*Owner bot : wa.me/62895611640680.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

[Pulsa]: 081242012521
[Dana]: 088704214847
[Gopay]: 082133788387

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -Ari`
}
