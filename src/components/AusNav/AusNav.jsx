import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/login "
        className="text-indigo-700 font-bold text-xl active:text-indigo-900 hover:text-cyan-500"
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className=" text-indigo-700 font-bold text-xl active:text-indigo-900 hover:text-cyan-500"
      >
        Register
      </NavLink>
    </div>
  );
};
