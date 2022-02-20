
const { readFileSync, writeFileSync } = require('fs')


console.log("Start")
const first = readFileSync('./content/subfolder/first.txt','utf8')

const second = readFileSync('./content/subfolder/second.txt', 'utf8')

console.log(first,second)

writeFileSync
(
	"./content/subfolder/writeFile.txt",
	`Here are the files ${first},${second}`,
	{ flag: 'a'}

)

console.log("done with this task")
console.log("starting with the next one")



