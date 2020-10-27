function getShortMessages(messages) {
	let msgStr = messages.map(msg => msg.message)
    return msgStr.filter(message => message.length < 50);
    }

    module.exports = getShortMessages