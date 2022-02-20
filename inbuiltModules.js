

//Os module
const os = require('os')


//info about current user

const user = os.userInfo()
console.log(user)



// method returns the system uptime in seconds


console.log(`The system Uptime is ${os.uptime()} seconds`)


const currentOS =
{
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)


//Path module #####################

console.log("Path modules ")

const path = require('path')

console.log(path.sep)


console.log('Path.join')
const filepath =path.join ('content', 'subfolder', 'file.txt')
console.log(filepath)
console.log('\n')

console.log('Path.basename')

const base = path.basename(filepath)
console.log(base)
console.log('\n')


console.log('AbsolutePath')

const AbsolutePath = path.resolve(__dirname, 'content', 'subfolder', 'file.txt')
console.log(AbsolutePath)





