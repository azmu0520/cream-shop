import Generic from '../components/Generic';
import Home from '../components/Home';
import Login from '../components/Login';
import About from '../components/About';
import Single from '../components/SingleUser';
export const data = [
  { id: 1, title: 'Home', path: '/home', Component: Home },
  { id: 2, title: 'About', path: '/about', Component: About },
  { id: 3, title: 'Login', path: '/login', Component: Login },
  { id: 3, hidden: true, title: 'User', path: '/single', Component: Single },
  { id: 4, title: 'UpComming', path: '/Upcoming', Component: Generic },
];
