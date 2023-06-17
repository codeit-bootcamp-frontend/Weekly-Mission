const getFormattedDate = (dateItem: string): string => {
  if (dateItem) {
    const date = new Date(dateItem)
    return date.toLocaleDateString('ko')
  }

  return ''
}

export default getFormattedDate
