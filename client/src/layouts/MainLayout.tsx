import { useEffect } from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import { PrivateHeader } from '../components/PrivateHeader';
import useAuth from '../context/hooks/useAuth';

const MainLayout = () => {
  const { auth, loading } = useAuth();

  useEffect(() => {
    console.log(auth);
  }, []);
  if (loading) return <p>loading</p>;
  return (
    <>
      {auth.id ? (
        <>
          <PrivateHeader />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default MainLayout;
