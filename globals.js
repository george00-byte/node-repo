// JavaScript source code

// __dirname  - path to current directory
// __filenam  - filename


//process   - info about env where the program is being executed


setInterval(() =>
{
    console.log(__dirname)

}, 1000)


function add(x,y)
{
    setTimeout(() =>
    {
   
        console.log("The sum is ", `${x + y}`)
  
    }, 1000)

}

add(10, 12)
