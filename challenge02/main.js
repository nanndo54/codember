let message = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'

function decypher(message) {
  const words = message.split(' ')
  
  let decypheredMessage = ''
  
  for (let word of words) {
    let i = 0
    while(i < word.length) {
      let fragment
      if (word.charAt(i) === '1') {
        fragment = Number(word.slice(i, i + 3))
        i += 3
      } else {
        fragment = Number(word.slice(i, i + 2))
        i += 2
      }
      
      console.log(fragment)
      
      decypheredMessage += String.fromCharCode(fragment)
  
    }
    
    decypheredMessage += " "
  }
  
  return decypheredMessage
}


decypher(message)
