let handler = function (m) {
  // this.sendContact(m.chat, '525623741080', 'Nurutomo', m)
  this.sendContact(m.chat, '525623741080', 'Sergio', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
