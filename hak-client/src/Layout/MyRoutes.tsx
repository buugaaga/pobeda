import { Routes, Route, useLocation } from 'react-router-dom';
import { YaMap } from '../pages/YaMap';

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<YaMap />}>
        <Route path="map" element={<YaMap />}>
          <Route path=":coordinates" element={<YaMap />} />
        </Route>
      </Route>
    </Routes>
  );
};
