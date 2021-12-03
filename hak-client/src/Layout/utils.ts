export const getTitle = (path: string) => {
  switch (path) {
    case '/dashboard':
      return 'Панель мониторинга'
    case '/analitics':
      return 'Аналитика'
    case '/control':
      return 'Управление'
    case '/integration':
      return 'Интеграция'
    default:
      return 'Карта'
  }
}