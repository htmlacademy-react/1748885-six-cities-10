export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer',
  Favorites = '/favorites',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum RatingStars {
  Star_0 = '0%',
  Star_1 = '20%',
  Star_2 = '40%',
  Star_3 = '60%',
  Star_4 = '80%',
  Star_5 = '100%'
}

export type place = {
  [key: string]: string,
};

export type elementType = {
  [key: number]: string,
};

export const placeType: place = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export const ratingTitle: elementType = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

export enum Setting {
  CARDS_ON_PAGE = 4,
  MAX_RATING = 5,
}

