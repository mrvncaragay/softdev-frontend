import shuffle from 'lodash/fp/shuffle';
import take from 'lodash/fp/take';

const pics = [
  'https://placekitten.com/640/360',
  'https://baconmockup.com/640/360',
  'https://www.placecage.com/640/360',
  'http://placeimg.com/640/360/any',
  'https://placebear.com/640/360',
  'https://picsum.photos/640/360',
  'https://picsum.photos/200/300?grayscale',
  'https://picsum.photos/id/237/200/300'
];

const nums = [11, 5, 32, 100, 83, 22, 31, 48, 14, 8, 80, 111, 333];

export const randomPics = () => {
  const pictures = shuffle(pics);
  return take(4, pictures);
};

export const randomNums = () => {
  const numbers = shuffle(nums);
  return take(1, numbers)[0];
};
