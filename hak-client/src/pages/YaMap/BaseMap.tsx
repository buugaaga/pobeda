import { useTheme } from '@mui/material';
import { color } from '@mui/system';
import { useParams } from 'react-router';
import { Map, Placemark, Circle, ZoomControl } from 'react-yandex-maps';
import { OIL_SPILS } from '../../mock/oilSpils';
import { BASES, POINTS } from '../../mock/points';
import { OilSpill } from '../../types';

type YaProps = {
  center?: [number, number];
  zoom?: number;
  points?: number[][];
  oilSpills?: OilSpill[];
  drons?: number[][];
  bases?: number[][];
  handleClickOnMap?: (e: any) => void
};

/**
 *
 * @props center
 * @props zoom - [широта, долгота]
 */
export function BaseMap({
  center = [61.06, 69.02],
  zoom = 11,
  drons = POINTS,
  bases = BASES,
  oilSpills = OIL_SPILS,
  handleClickOnMap
}: YaProps) {
  const { coordinates } = useParams();

  const oilSpillCenter = coordinates && coordinates.split(',').map((item) => parseFloat(item));

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
      {oilSpills &&
        oilSpills.map(({ cts, d, desc }, idx) => {
          return (
            <Circle
              key={idx}
              geometry={[cts, d]}
              modules={['geoObject.addon.hint', 'geoObject.addon.balloon']}
              properties={{
                balloonContent: 'hi baby',
                hintContent: desc || 'нет данных',
              }}
              options={{
                fillColor: '#DB709377',
                strokeColor: '#990066',
                strokeOpacity: 0.8,
                strokeWidth: 5,
              }}
              ballon={
                <Placemark
                  geometry={[61.1, 69.35]}
                  options={{
                    preset: 'islands#dotIcon',
                    iconColor: 'red',
                  }}
                />
              }
            />
          );
        })}
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
