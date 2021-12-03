import { Box } from '@mui/system';
import { YMaps } from 'react-yandex-maps';
import {  useQuery } from 'react-query';
import { BaseMap } from './BaseMap';

export const YaMap = () => {
  const { data } = useQuery('repoData', () => fetch('/api/maps').then((res) => res.json()));
  console.log(data)
  return (
    <YMaps>
      <Box sx={{ width: '100%' }}>
        <BaseMap />
      </Box>
    </YMaps>
  );
};
