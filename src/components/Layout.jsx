import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>LOADING COMPONENTS...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
