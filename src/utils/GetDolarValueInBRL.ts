import axios from 'axios'

export default async function GetDolarValueInBRL() {
  try {
    const response = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL')
    const dolarPriceInBRL = response.data.USDBRL.high

    return dolarPriceInBRL
  } catch (error) {
    console.error('ERROR:', error)
    throw error
  }
}
