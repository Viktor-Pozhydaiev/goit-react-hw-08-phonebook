import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className="flex flex-row items-center p-5 bg-slate-500 ">
      <NavLink
        to="/login "
        className="m-2 text-indigo-700 font-bold text-xl active:text-indigo-900 hover:text-cyan-500"
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className="m-2 text-indigo-700 font-bold text-xl active:text-indigo-900 hover:text-cyan-500"
      >
        Register
      </NavLink>
    </div>
  );
};
