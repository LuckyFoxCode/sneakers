import { Header } from 'components/common';
import { HomePage } from 'pages';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '.';

export const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={<HomePage />}
        />
      </Routes>
    </>
  );
};
