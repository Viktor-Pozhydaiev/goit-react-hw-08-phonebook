import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <p className="text-green-600 text-xl">Home</p>
        </Link>
      </nav>
      <Suspense fallback={<div>LOADING COMPONENTS...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
