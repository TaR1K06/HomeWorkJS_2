function foobar(text, calculus) {
    document.write(`<ul>`)
    for (let i = 0; i < calculus; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
foobar('Hello',50)
