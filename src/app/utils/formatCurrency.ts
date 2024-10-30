const formatCurrency = (
  amount: number,
  currencyCode: string,
  locale: string = 'en-US'
): string => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode
  })

  return formatter.format(amount)
}
export { formatCurrency }
