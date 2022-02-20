const { readFile, writeFile } = require('fs')

console.log("Start")

readFile('./content/subfolder/first.txt', 'utf8',
    (err, result) => {
        if (err) {
            console.log("Error")
            return err
        }

        const first = result;

        readFile('./content/subfolder/second.txt', 'utf8',
            (err, result) => {
                if (err) {
                    console.log("Error")
                    return;
                }

                const second = result;
                writeFile
                    (
                        "./content/subfolder/writeFile.txt",
                        `Here are the files ${first},${second}`,
                        { flag: 'a' },
                        (err, result) => {
                            if (err) {
                                console.log("Error")
                                return;
                            }

                            console.log("Done with this task")

                        })

            })
    })

console.log("Starting next task ")









