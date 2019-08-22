import palette from './palette';

export default {
  fontFamily: ['Raleway', 'Helvetica', 'sans-serif'].join(','),

  h2: {
    color: palette.text.main,
    fontSize: '2em',
    fontWeight: 900,
    letterSpacing: '0.25em',
    textTransform: 'uppercase'
  },

  h3: {
    color: palette.text.main,
    fontSize: '24px',
    fontWeight: 900,
    letterSpacing: '0.25em',
    textTransform: 'uppercase'
  },

  h4: {
    color: palette.text.main,
    fontWeight: '800',
    fontSize: '14px',
    letterSpacing: '0.25em',
    textTransform: 'uppercase'
  },

  h5: {
    color: palette.text.secondary,
    fontSize: '12px',
    letterSpacing: '0.25em',
    textTransform: 'uppercase'
  },

  h6: {
    color: palette.text.secondary,
    fontSize: '12px',
    letterSpacing: '0.15em'
  },

  body2: {
    color: palette.text.primary,
    fontSize: '0.8em',
    letterSpacing: '0.20em',
    fontWeight: 500,
    lineHeight: 1.5
  }
};
