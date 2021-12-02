import { Box } from '@mui/system'
import { YMaps, Map } from 'react-yandex-maps'

type YaProps = {
  center?: [number, number];
  zoom?: number;
}
/**
 * 
 * @props center
 * @props zoom - [широта, долгота]
 */
export function YaMap({ center = [61.06, 69.02], zoom = 9 }: YaProps) {
  return (
    <YMaps>
      <Box sx={{ width: '100%' }}>
        <Map defaultState={{ center, zoom }} width="100" height="75vh" />
      </Box>
    </YMaps>
  )
}
