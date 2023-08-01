export default function FormatDolarToReal(amount: number, dolarPriceInBRL: number) {

  const formattedPrice = (amount * dolarPriceInBRL).toLocaleString('en-US', {
    style: 'currency',
    currency: 'BRL',
  })

  return formattedPrice
}
