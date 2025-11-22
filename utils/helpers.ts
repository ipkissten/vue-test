export const formatNumberLang = (num: number, lang = 'en-US') => {
  return new Intl.NumberFormat(lang, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num)
}

export function objectToFormData(obj: Record<string, any>): FormData {
    const formData = new FormData()

    Object.entries(obj).forEach(([key, value]) => {
        if (value === undefined || value === null) {
            return
        }

        if (typeof value === 'object' && !(value instanceof Blob)) {
            formData.append(key, JSON.stringify(value))
        }
        else {
            formData.append(key, value)
        }
    })

    return formData
}
