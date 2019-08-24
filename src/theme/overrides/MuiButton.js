// Palette
import palette from '../palette';

export default {
  root: {
    borderRadius: 'none'
  },

  outlined: {
    backgroundColor: palette.common.white,
    letterSpacing: '0.15em',
    border: `1px solid ${palette.btn}`,
    '&:hover': {
      border: `1px solid ${palette.background.default}`,
      backgroundColor: palette.common.white,
      color: palette.background.default
    },

    '& a': {
      color: palette.common.muted,
      transition: 'color 250ms ease'
    },

    '&:hover a, &:hover span': {
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
  },

  label: {
    color: palette.common.muted,
    transition: 'color 250ms ease'
  }
};
