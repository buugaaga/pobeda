
/api/maps

`GET`

```javascript
{
  center: Coordinates, // центра карты по дефолту или по какому либо запросу
  drons: Drons[],
  base: BaseGroup[],
}
```

------------------------
/api/maps/oil-spills?startDate=date

`GET`

```javascript
OilSpills[] // Массив объектов из разливов
```
- date - фильтровать по дате (минимальное значение)

------------------------
/api/maps/oil-spills/alerts

При появлении нового пятна добавлять его в этот массив

`GET`

```javascript
OilSpills[] 
```

/api/maps/oil-spills/alerts/${id}
`DELETE`

