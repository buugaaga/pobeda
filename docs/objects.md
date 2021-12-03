Coordinates 

[number, number] - Широта, долгота

OilSpills 

```javascript
{
  id: string,
  cts: Coordinates[], 
  date: string, // Дата розлива
  area: number, // Диаметр в метрах
  image: string, // Ссылка на картинку розлива
}
```

BaseGroup
```javascript
{
  id: string,
  cts: Coordinates[], //место нахождения группы обнаружения 
  date: string, // Дата розлива
  dsc: string // какое то описание
}
```

Drons
```javascript
{
  id: string,
  cts: Coordinates[],  // координаты дронов
  date: string, // Дата последнего обновления
  dsc: string // Марка или название дрона
}
```