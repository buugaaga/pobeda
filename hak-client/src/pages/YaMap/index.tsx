import { useState } from 'react';
import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { YMaps } from 'react-yandex-maps';
import { useQuery, useQueryClient } from 'react-query';
import { BaseMap } from './BaseMap';
import { MapForm } from './MapForm';
import { apiFetch } from '../../apiFetch';

export const YaMap = () => {
  const [mark, setMark] = useState(false);
  const [cts, setCts] = useState(null);

  const queryClient = useQueryClient();
  const { isLoading, data: oilSpills } = useQuery('repoData', () =>
    apiFetch('/api/reestr?bdate=25.05.2020&edate=31.12.2020')
  );

  const handleClickOnMap = (e: any) => {
    if (!mark) {
      return;
    }
    const cts = e?.originalEvent?.map?._bounds[0];
    if (cts) {
      setCts(cts);
    }
  };
  if (!oilSpills) {
    return <div>Loading...</div>;
  }
  return (
    <YMaps query={{ csp: isLoading }}>
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
        <BaseMap handleClickOnMap={handleClickOnMap} oilSpills={oilSpills} />
      </Box>
    </YMaps>
  );
};
