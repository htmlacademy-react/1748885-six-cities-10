import { CommentType } from '../types/comment-type';

export const comments: CommentType[] = [
  {
    id: 1,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/9.jpg'
    },
    rating: 4,
    comment: 'Home is amazing. It is like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2022-05-25T12:25:36.939Z'
  },
  {
    id: 2,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/9.jpg'
    },
    rating: 5,
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2022-05-25T12:25:36.939Z'
  },
  {
    id: 3,
    user: {
      id: 13,
      isPro: false,
      name: 'Zak',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/4.jpg'
    },
    rating: 3,
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2022-06-22T12:25:36.939Z'
  },
  {
    id: 4,
    user: {
      id: 11,
      isPro: false,
      name: 'Jack',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/2.jpg'
    },
    rating: 3,
    comment: 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2022-06-22T12:25:36.939Z'
  }
];
