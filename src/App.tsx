import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { useAppSelector } from './app/hooks';
import { Header, RequireAuth } from './components';
import { ContextFavouritePage } from './context/context';
import {
  Search,
  NotFound,
  Main,
  CardId,
  Signup,
  Signin,
  Favourites,
  HistoryPage,
  ErrorBoundary,
} from './pages';
import { PATHS } from './shared/constants/routes';

const App = () => {
  const { user } = useAppSelector((state) => state.authStorage);
  return (
    <div className="App">
      <ContextFavouritePage.Provider value={user.favourites.length}>
        <Header />
      </ContextFavouritePage.Provider>
      <ErrorBoundary>
        <Routes>
          <Route path={PATHS.main} element={<Main />} />
          <Route path={PATHS.search} element={<Search />} />
          <Route path={PATHS.id} element={<CardId />} />
          <Route path={PATHS.signup} element={<Signup />} />
          <Route path={PATHS.signin} element={<Signin />} />
          <Route
            path={PATHS.favourites}
            element={
              <RequireAuth>
                <Favourites />
              </RequireAuth>
            }
          />
          <Route
            path={PATHS.history}
            element={
              <RequireAuth>
                <HistoryPage />
              </RequireAuth>
            }
          />
          <Route path={PATHS.notFound} element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;
