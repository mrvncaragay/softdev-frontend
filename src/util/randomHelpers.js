import shuffle from 'lodash/fp/shuffle';
import take from 'lodash/fp/take';

const pics = Array.from(
  { length: 19 },
  (url, i) =>
    `https://softdev-react.s3-us-west-1.amazonaws.com/users/user${i + 1}.jpg`
);

const corps = Array.from(
  { length: 13 },
  (url, i) =>
    `https://softdev-react.s3-us-west-1.amazonaws.com/corporations/corp${i +
      1}.png`
);

const schools = Array.from(
  { length: 15 },
  (url, i) =>
    `https://softdev-react.s3-us-west-1.amazonaws.com/schools/sch${i + 1}.png`
);

const nums = [11, 5, 32, 100, 83, 22, 31, 48, 14, 8, 80, 111, 222, 333, 12];

export const randomSchools = () => {
  const pictures = shuffle(schools);
  return take(1, pictures)[0];
};

export const randomCorps = () => {
  const pictures = shuffle(corps);
  return take(1, pictures)[0];
};

export const randomPics = () => {
  const pictures = shuffle(pics);
  return take(4, pictures);
};

export const randomNums = () => {
  const numbers = shuffle(nums);
  return take(1, numbers)[0];
};
