export const getTitle = (path: string) => {
  switch (path) {
    case '/dashboard':
      return 'Панель мониторинга'

    case '/analitics':
      return 'Аналитика'


    default:
      return 'Карта'
  }
}