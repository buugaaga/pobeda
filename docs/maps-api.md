
/api/maps

`GET`

```javascript
{
  center: Coordinates, // центра карты по дефолту или по какому либо запросу
  drons: {
    cts: Coordinates[], // координаты дронов
    dsc: string, // Марка или название дрона
  },
  base: {
    cts: Coordinates[], // место нахождения группы обнаружения
    dsc: string, // описание
  },
}
```

/api/maps/oil-spills

`GET`

```javascript
OilSpills[] // Массив объектов из разливов
```