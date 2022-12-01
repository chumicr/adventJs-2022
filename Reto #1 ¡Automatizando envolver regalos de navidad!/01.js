function wrapping (gifts) {
	const mapGifts = gifts.map(str => "*".repeat(str.length + 2) + "\n" + "*" + str + "*" + "\n" + "*".repeat(str.length + 2))
	return mapGifts
}