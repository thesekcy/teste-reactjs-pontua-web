import moment from 'moment'

export default function FormatTimestamp(timestamp: string) {
  const formattedDate = moment(timestamp).format('DD/MM/YYYY')
  return formattedDate
}
