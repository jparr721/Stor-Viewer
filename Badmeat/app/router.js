import { DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dashboard from './components/dashboard/dashboard';

export const Drawer = DrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      path: '',
      contentOptions: {
        drawerWidth: 250,
      },
    }
  }
);
