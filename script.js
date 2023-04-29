const input = document.querySelector('.dollars')

const coins = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0,
  totalCoins: 0,
}

let resetCoins = function () {
  const keys = Object.keys(coins)
  keys.forEach((key) => (coins[key] = 0))
}

let updateDisplay = function () {
  const keys = Object.keys(coins)
  keys.forEach((key) => {
    const display = document.querySelector(`.${key}`)
    display.textContent = coins[key]
  })
}

let formatDollarsToCents = function (value) {
  value = (value + '').replace(/[^\d.-]/g, '')
  if (value && value.includes('.')) {
    value = value.substring(0, value.indexOf('.') + 3)
  }

  return value ? Math.round(parseFloat(value) * 100) : 0
}

input.addEventListener('change', () => {
  let DollarsToCents = formatDollarsToCents(input.value)
  resetCoins()
  updateDisplay()

  do {
    if (DollarsToCents >= 25) {
      DollarsToCents -= 25
      coins.quarters += 1
    } else if (DollarsToCents >= 10) {
      DollarsToCents -= 10
      coins.dimes += 1
    } else if (DollarsToCents >= 5) {
      DollarsToCents -= 5
      coins.nickels += 1
    } else {
      DollarsToCents -= 1
      coins.pennies += 1
    }

    coins.totalCoins += 1

    updateDisplay()
  } while (DollarsToCents > 0)
})
