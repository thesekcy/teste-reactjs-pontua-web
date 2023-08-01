export default function SelectRandomItemsFromArray(array: unknown[], quantity: number) {
  // Verifica se o número de itens a serem retornados é maior ou igual ao tamanho do array
  if (quantity >= array.length) {
    return array.slice() // Retorna uma cópia do array original
  }

  // Embaralha o array para obter itens aleatórios
  const shuffledArray = array.slice()
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }

  // Retorna os primeiros 'n' itens do array embaralhado
  return shuffledArray.slice(0, quantity)
}