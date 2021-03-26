let handler = async m => m.reply(`
╭─〘 Pato V3 〙
│ • Este bot es gratis
│ • Puedes ayudar suscribientode al canal
│ 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
