import { useTheme } from '@mui/material';
import { useParams } from 'react-router';
import { Map, Placemark, Circle, ZoomControl, Clusterer } from 'react-yandex-maps';
import { DateTime } from 'luxon';
// import { OIL_SPILS } from '../../mock/oilSpils';
import { BASES, POINTS } from '../../mock/points';
import { OilSpill } from '../../types';

type YaProps = {
  center?: [number, number];
  zoom?: number;
  points?: number[][];
  oilSpills?: OilSpill[];
  drons?: number[][];
  bases?: number[][];
  handleClickOnMap?: (e: any) => void;
};

/**
 *
 * @props center
 * @props zoom - [широта, долгота]
 */
export function BaseMap({
  center = [61.06, 69.02],
  zoom = 7,
  drons = POINTS,
  bases = BASES,
  oilSpills,
  handleClickOnMap,
}: YaProps) {
  const { coordinates, zoomParam } = useParams();

  const oilSpillCenter = coordinates
    ? coordinates.split(',').map((item) => parseFloat(item))
    : undefined;

  const theme = useTheme();
  const sky = theme.palette.info.dark;
  return (
    <Map
      width="100%"
      height="70vh"
      state={{ center: oilSpillCenter || center, zoom }}
      onClick={(e: any) => handleClickOnMap(e)}
    >
      <ZoomControl />

      <Clusterer
        options={{
          preset: 'islands#invertedVioletClusterIcons',
          groupByCoordinates: false,
        }}
      >
        {oilSpills &&
          oilSpills.map(({ id, lat, lon, category, area, map, location }) => {
            const cts = [[Number(lat.toFixed(3)), Number(lon.toFixed(3))], Math.round(area * 1000)];

            return (
              <Circle
                key={id}
                geometry={cts}
                modules={['geoObject.addon.hint', 'geoObject.addon.balloon']}
                properties={{
                  balloonContent: `<a href="${map}"" target="_blank">Посмотреть снимки ${location}</a>`,
                  hintContent: category || 'нет данных',
                }}
                options={{
                  fillColor: '#DB709377',
                  strokeColor: '#990066',
                  strokeOpacity: 0.8,
                  strokeWidth: 5,
                }}
              />
            );
          })}
      </Clusterer>
      {drons &&
        drons.map((cts, idx) => (
          <Circle
            key={idx}
            geometry={[cts, 100]}
            modules={['geoObject.addon.hint', 'geoObject.addon.balloon']}
            properties={{
              hintContent: `Дрон №${idx}`,
              // balloonContentBody: `placemark <strong>balloon ${idx} </strong>`,
              // clusterCaption: `placemark <strong> ${idx} </strong>`,
            }}
            options={{
              fillColor: sky,
              strokeOpacity: 0.8,
              strokeWidth: 5,
            }}
          />
        ))}
      {bases &&
        bases.map((cts, idx) => (
          <Circle
            key={idx}
            geometry={[cts, 100]}
            modules={['geoObject.addon.hint', 'geoObject.addon.balloon']}
            properties={{
              hintContent: `Команда проверки №${idx}`,
              balloonContentBody: `placemark <strong>balloon ${idx} </strong>`,
              // clusterCaption: `placemark <strong> ${idx} </strong>`,
            }}
            options={{
              fillColor: theme.palette.success.main,
              strokeColor: theme.palette.success.light,
              strokeOpacity: 0.8,
              strokeWidth: 10,
            }}
          />
        ))}
    </Map>
  );
}
