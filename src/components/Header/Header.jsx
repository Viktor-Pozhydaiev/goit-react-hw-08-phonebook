import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className=" bg-slate-500 w-[100%]  p-5 flex flex-row justify-evenly ">
      <NavLink to="/" className="text-indigo-700 font-bold text-xl">
        Home
      </NavLink>
      <NavLink to="/login " className="text-indigo-700 font-bold text-xl">
        Login
      </NavLink>
      <NavLink to="/contacts" className=" text-indigo-700 font-bold text-xl">
        Contacts
      </NavLink>
    </nav>
  );
};
