import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavotitesScreen from '../../pages/favorites-screen/favorites-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import Page404 from '../../pages/page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import {OfferTypes} from '../../types/offer-type';

type AppScreenProps = {
  placesCount: number;
  offers: OfferTypes;
};

function App({ placesCount, offers }: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={
            <MainScreen
              placesCount={placesCount}
              offers={offers}
            />
          }
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavotitesScreen offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route path={`${AppRoute.Room}/:id`} element={<RoomScreen offers={offers}/>} />
        </Route>
        <Route path={AppRoute.NotFound} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
