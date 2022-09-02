export const Utils = {
  /**
   * Formatting date for Brazilian date
   * @param date - 2022-08-25 (string)
   * 
   * @returns date formated 25/08/2022 (string)
   */
  formatDate(date) {
    const splittedDate = date.split('-');
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
  },

  /**
   * Formatting value for Brazilian currency
   * @param value - currency (string)
   * 
   * @returns formated currency to BR (string)
   */
  formatCurrency(value) {
    value = String(value).replace(/\D/g, '');
    value = value / 100;
    value = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    return value;
  }
}