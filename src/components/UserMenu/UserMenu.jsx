import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className="border-6 border-green-500">
      <p>Welcome, {user.name}</p>
      <button
        className="bg-indigo-500"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <span className="motion-reduce:hidden animate-spin" viewBox="0 0 24 24">
          Logout
        </span>
      </button>
    </div>
  );
};
