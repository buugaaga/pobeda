import { Box } from '@mui/system';
import { YMaps } from 'react-yandex-maps';
import { BaseMap } from './BaseMap';

export const YaMap = () => {
  return (
    <YMaps>
      <Box sx={{ width: '100%' }}>
        <BaseMap />
      </Box>
    </YMaps>
  );
};
