import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import LandingPage from '../pages/LandingPage';

export const routes = [
  { path: '/', component: LandingPage },
  { path: '/home', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
];