import shuffle from 'lodash/fp/shuffle';
import take from 'lodash/fp/take';

const pics = Array.from(
  { length: 19 },
  (url, i) =>
    `https://softdev-react.s3-us-west-1.amazonaws.com/users/user${i + 1}.jpg`
);

const nums = [11, 5, 32, 100, 83, 22, 31, 48, 14, 8, 80, 111, 222, 333, 12];

export const randomPics = () => {
  const pictures = shuffle(pics);
  return take(4, pictures);
};

export const randomNums = () => {
  const numbers = shuffle(nums);
  return take(1, numbers)[0];
};
