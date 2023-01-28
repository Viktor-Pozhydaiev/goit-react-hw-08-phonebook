import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className=" bg-slate-500 w-[100%]  p-5 flex flex-row ">
      <NavLink
        to="/"
        className="mr-3 text-indigo-700 font-bold text-xl active:text-indigo-900 hover:text-cyan-500"
      >
        Homepage
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className="ml-3 text-indigo-700 font-bold text-xl active:text-indigo-900 hover:text-cyan-500"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
