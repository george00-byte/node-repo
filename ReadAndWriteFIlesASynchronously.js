
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/subfolder/first.txt','utf8')

const second = readFileSync('./content/subfolder/second.txt', 'utf8')

console.log(first,second)

writeFileSync
(
	"./content/subfolder/writeFile.txt",
	`Here are the files ${first},${second}`,
	{ flag: 'a'}

)
