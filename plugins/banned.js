let handler = async (m, { conn, text }) => {
	if(isNaN(text)) {
		var number = text.split`@`[1]
	} else if(!isNaN(text)) {
		var number = text
	}
	
	if(!text && !m.quoted) return conn.reply(m.chat, `*Escribe el número*`, m)
	if(number.length > 15) return conn.reply(m.chat, `*Formato invalido*`, m)
	
try {
	if(text) {
		var user = number + '@s.whatsapp.net'
	} else if(m.quoted.sender) {
		var user = m.quoted.sender
	} else if(m.mentionedJid) {
		var user = number + '@s.whatsapp.net'
	} 
} catch (e) {
		} finally {
			if(global.DATABASE._data.users[user].isBanned == true){
			  conn.reply(m.chat, `*Esta persona ya esta baneada*`, m)
			}else {
        global.DATABASE._data.users[user].isBanned = true
				global.DATABASE._data.banned += 1
				var banTotal = global.DATABASE._data.banned
				conn.reply(m.chat, `*BANEADOS !*\n\n○ *Total de baneados : ${banTotal}*`, m)
			}
	}	
}

handler.help = ['*62xx*','*@user*','*(reply)*'].map(v => 'ban ' + v)
handler.tags = ['owner']
handler.command = /^ban$/i
handler.owner = true
module.exports = handler
