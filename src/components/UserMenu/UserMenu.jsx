import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className="border-6 flex flex-row ">
      <p className="text-orange-600 text-center"> Welcome {user.name}</p>
      <button
        className="ml-2 bg-indigo-500"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <span>Logout</span>
      </button>
    </div>
  );
};
