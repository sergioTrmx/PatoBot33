let handler = async m => m.reply(`
 Que buscabas crack 🤡🤡                                    
`.trim()) 
handler.help = ['git']
handler.tags = ['info']
handler.command = /^git$/i

module.exports = handler

