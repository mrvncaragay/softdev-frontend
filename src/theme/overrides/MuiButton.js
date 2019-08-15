// Palette
import palette from '../palette';

export default {
  outlined: {
    backgroundColor: palette.common.white,
    color: palette.common.muted,
    letterSpacing: '0.15em',
    '&:hover': {
      border: `1px solid ${palette.background.default}`,
      backgroundColor: palette.common.white,
      color: palette.background.default
    }
  },
  sizeSmall: {
    color: palette.common.muted,
    letterSpacing: '0.15em',
    '&:hover': {
      color: palette.background.default
    }
  }
};
