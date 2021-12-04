import { Link } from 'react-router-dom';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { OilSpill } from '../../types';

type Props = {
  oilSpills: OilSpill[];
};

export const OilTable = ({ oilSpills }: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Координаты</TableCell>
            <TableCell>Описание</TableCell>
            <TableCell>Место</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {oilSpills.map(({ id, lat, lon, category, location }) => {
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link to={`/map/${lat},${lon}`}>{`[${lat}, ${lon}]`}</Link>
                </TableCell>
                <TableCell>{category}</TableCell>
                <TableCell>{location}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
