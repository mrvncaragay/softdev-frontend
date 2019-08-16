// Palette
import palette from '../palette';

export default {
  outlined: {
    backgroundColor: palette.common.white,
    letterSpacing: '0.15em',
    border: 'solid 1px rgba(160, 160, 160, 0.3)',
    '&:hover': {
      border: `1px solid ${palette.background.default}`,
      backgroundColor: palette.common.white,
      color: palette.background.default
    },

    '& a': {
      color: palette.common.muted
    },

    '&:hover a': {
      color: palette.background.default
    }
  },
  sizeSmall: {
    letterSpacing: '0.15em',
    color: palette.background.default,

    '& a': {
      color: palette.common.muted
    },

    '&:hover a': {
      color: palette.background.default
    }
  }
};
