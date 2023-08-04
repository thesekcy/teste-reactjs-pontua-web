export default function RandomNumberInInterval(min: number, max: number) {
  if (min >= max) {
    throw new Error('O intervalo fornecido é inválido.')
  }

  return Math.floor(Math.random() * (max - min)) + min
}