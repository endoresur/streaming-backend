// index.js
module.exports = () => {
  const data = { users: [] }
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: `user${i}` })
  }

  const test = {
    id: 1,
    text: 'hbjn'
  }

  const test2 = {
    id: 1,
    text: 'hbjn'
  }

  return {data, test, test2}
}