import { Alert, Box, Collapse, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { OIL_SPILS_ALERT } from '../mock/oilSpils';
// import { useQuery } from 'react-query';
import { OilSpillAlert } from '../types';

type Props = {
  oilSpills?: OilSpillAlert[];
  open: boolean;
  setOpen: () => void;
};

export const OilAlerts = ({ oilSpills = OIL_SPILS_ALERT, open, setOpen }: Props) => {
  // const { data } = useQuery<OilSpillAlert[]>('/api/maps/oil-spills/alerts');
  // if (!data) {
  //   return null;
  // }
  return (
    <Box sx={{ width: '30vw' }} position="absolute" top={70} right={20}>
      <Collapse in={open}>
        {oilSpills && oilSpills.map(({ id, cts, desc}) => {
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
