const lowerLimit = 11098
const upperLimit = 98123

const passwords = []

for (let i = lowerLimit; i < upperLimit; i++) {
  const password = String(i).split('')
  if(
    password.filter(n => n === '5').length >= 2 &&
    password.every((n, i) => i === 0 || password.at(i - 1) <= n)
  )
    passwords.push(i)
}

console.log('Solución:', passwords.length + '-' + passwords[55])
