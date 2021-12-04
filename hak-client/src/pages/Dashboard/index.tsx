import { useQuery } from 'react-query';
import { apiFetch } from '../../apiFetch';
import { OilTable } from './OilTable';

export const Dashboard = () => {
  const { data: oilSpills } = useQuery('repoData', () =>
    apiFetch('/api/reestr?bdate=25.05.2020&edate=31.12.2020')
  );
  if (!oilSpills) {
    return <div>Loading...</div>
  }
  return <OilTable oilSpills={oilSpills} />;
};
