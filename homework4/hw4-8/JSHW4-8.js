function foobar (arrayOfPrimitive) {
  document.write(`<ul>`)
  for (const beds of arrayOfPrimitive) {
    document.write(`<li>${beds}</li>`)
  }
  document.write(`</ul>`)
}

foobar([122, 44, 543, 3131, 'hello my friends', 554])
