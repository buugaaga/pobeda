import { Routes, Route } from 'react-router-dom';
import { Integration } from '../pages/ Integration';
import { Analitics } from '../pages/Analitics';
import { Control } from '../pages/Control';
import { Dashboard } from '../pages/Dashboard';
import { YaMap } from '../pages/YaMap';

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<YaMap />}>
        <Route path="map" element={<YaMap />}>
          <Route path=":coordinates" element={<YaMap />} />
        </Route>
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analitics" element={<Analitics />} />
      <Route path="/control" element={<Control />} />
      <Route path="/integration" element={<Integration />} />
    </Routes>
  );
};
