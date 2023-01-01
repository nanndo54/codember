const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf8')

const necessaryFields = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

try {
  const users = data.split('\n\n').filter(d => d)
  users

  const validUsers = [], invalidUsers = []
  for (const user of users) {
    const parsedUser = {}
    for (const entry of user.split(/[ \n]/).filter(f => f)) {
      parsedUser[entry.split(':')[0]] = entry.split(':')[1]
    }

    if (necessaryFields.every(field => parsedUser[field] || parsedUser[field] == "")) validUsers.push(parsedUser)
    else invalidUsers.push(parsedUser)
  }

  console.log('Solución: ', validUsers.at(-1).usr + validUsers.length)

} catch (err) {}
