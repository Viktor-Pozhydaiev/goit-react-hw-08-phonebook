import { AuthNav } from 'components/AusNav/AusNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { Navigation } from '../Navigation/Navigation';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
