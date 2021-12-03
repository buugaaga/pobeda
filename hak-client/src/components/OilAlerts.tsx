import { Alert, Stack } from '@mui/material';
import { OIL_SPILS } from '../mock/oilSpils';
// import { useQuery } from 'react-query';
import { OilSpill } from '../types';

type Props = {
  oilSpills?: OilSpill[];
};

export const OilAlerts = ({ oilSpills = OIL_SPILS }: Props) => {
  // const { data } = useQuery<OilSpillAlert[]>('/api/maps/oil-spills/alerts');
  // if (!data) {
  //   return null;
  // }
  return (
    <Stack style={{ position: 'absolute', top: 40, right: 20 }}>
      {oilSpills.map(({ id, desc }) => {
        return (
          <Alert key={id} severity="warning">
            {desc}
          </Alert>
        );
      })}
    </Stack>
  );
};
