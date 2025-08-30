function printFullName() {
    console.log("muna", "osman")
}

// setTimeout(printFullName, 10000)

let timer = setInterval(printFullName, 1000)


setTimeout(() => {
    clearInterval(timer)
}, 10000)


