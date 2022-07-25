import {OfferTypes, OfferType} from '../../types/offer-type';
import FavoritesPlaces from '../../components/favorites-places/favorites-places';

type FavoritesListProps = {
    offers: OfferTypes;
};

function FavoritesList(props: FavoritesListProps): JSX.Element {
  const {offers} = props;

  return (
    <ul className="favorites__list">
      {offers.map((offer: OfferType) => {
        const id = offer.id;
        return <FavoritesPlaces key={id} offer={offer} />;
      })}
    </ul>
  );
}

export default FavoritesList;
