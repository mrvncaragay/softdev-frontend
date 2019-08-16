// Palette
import palette from '../palette';

export default {
  underline: {
    '&:before': {
      borderBottom: `2px solid ${palette.border}`
    },

    '&:after': {
      borderBottom: `2px solid ${palette.background.default}`
    }
  }
};
