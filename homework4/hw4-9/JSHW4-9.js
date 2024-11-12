function foobar (users) {
  for (const user of users) {
    document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
  }
}
foobar([
  {id: 1, name: 'Mikhael', age: 12},
  {id: 2, name: 'Mikhael', age: 13},
  {id: 3, name: 'Mikhael', age: 14},
  {id: 4, name: 'Mikhael', age: 15},
  {id: 5, name: 'Mikhael', age: 16},
])
