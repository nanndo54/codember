function color(leds) {
  let previousLed = leds[1], previousTwoLed = leds[0]

  let currentZebra = leds.slice(0, 2)
  let longestZebra = leds.slice(0, 2)

  for (let led of leds.slice(2)) {
    if (led === previousTwoLed || previousTwoLed === "") {
      currentZebra.push(led)
    } else {
      if(currentZebra.length > longestZebra.length) longestZebra = currentZebra
      currentZebra = [previousLed, led]
      previousTwoLed = ""
    }

    previousTwoLed = previousLed
    previousLed = led
  }

  if(currentZebra.length > longestZebra.length) longestZebra = currentZebra

  console.log("Solución:", longestZebra.length + '@' + longestZebra.at(-1))
}
