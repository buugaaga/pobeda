import { Alert, Box, Collapse, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { OIL_SPILS } from '../mock/oilSpils';
// import { useQuery } from 'react-query';
import { OilSpill } from '../types';

type Props = {
  oilSpills?: OilSpill[];
  open: boolean;
  setOpen: () => void;
};

export const OilAlerts = ({ oilSpills = OIL_SPILS, open, setOpen }: Props) => {
  // const { data } = useQuery<OilSpillAlert[]>('/api/maps/oil-spills/alerts');
  // if (!data) {
  //   return null;
  // }
  return (
    <Box sx={{ width: '30vw' }} position="absolute" top={20} right={20}>
      <Collapse in={open}>
        {oilSpills.map(({ id, desc, cts }) => {
          return (
            <Alert
              key={id}
              severity="warning"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen();
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <Link to={`/map/${cts}`}>{desc}</Link>
            </Alert>
          );
        })}
      </Collapse>
    </Box>
  );
};
