import { useState } from 'react';
import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { YMaps } from 'react-yandex-maps';
// import {  useQuery } from 'react-query';
import { BaseMap } from './BaseMap';
import { MapForm } from './MapForm';

export const YaMap = () => {
  const [mark, setMark] = useState(false);
  // const [form, setForm] = useState(false);
  const [cts, setCts] = useState(null);
  // const { data } = useQuery('repoData', () => fetch('/api/maps').then((res) => res.json()));
  // console.log(data)

  const handleClickOnMap = (e: any) => {
    if (!mark) {
      return;
    }
    const cts = e?.originalEvent?.map?._bounds[0];
    if (cts) {
      setCts(cts);
    }
  };
  return (
    <YMaps>
      <Modal
        open={Boolean(cts)}
        onClose={() => setCts(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MapForm cts={cts} />
      </Modal>
      <Button color={mark ? 'info' : 'secondary'} onClick={() => setMark(!mark)}>
        {mark ? 'Работать с картой' : 'Отметить местность'}
      </Button>
      <Box sx={{ width: '100%' }}>
        <BaseMap handleClickOnMap={handleClickOnMap} />
      </Box>
    </YMaps>
  );
};
