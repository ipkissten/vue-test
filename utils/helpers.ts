export const formatNumberLang = (num: number, lang = 'en-US') => {
  return new Intl.NumberFormat(lang, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num)
}