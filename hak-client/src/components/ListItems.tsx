import { useNavigate } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import MapIcon from '@mui/icons-material/Map'
import AssignmentIcon from '@mui/icons-material/Assignment'

export const MainListItems = () => {
  const navigate = useNavigate()
  return (
    <div>
      <ListItem button onClick={() => navigate('/')}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="Карта" />
      </ListItem>
      <ListItem button onClick={() => navigate('/dashboard')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Панель мониторинга" />
      </ListItem>
      <ListItem button onClick={() => navigate('/analitics')}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Аналитика" />
      </ListItem>
      <ListItem button onClick={() => navigate('/control')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Управление" />
      </ListItem>
      <ListItem button onClick={() => navigate('/integration')}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Интеграция" />
      </ListItem>
    </div>
  )
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Сохраненные отчеты</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Месяц" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Квартал" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Год" />
    </ListItem>
  </div>
)
