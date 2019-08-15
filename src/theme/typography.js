import palette from './palette';

export default {
  fontFamily: ['Raleway', '"Helvetica"', 'sans-serif'].join(','),
  h4: {
    color: palette.text.main,
    fontWeight: '800',
    fontSize: '14px',
    letterSpacing: '0.25em',
    textTransform: 'uppercase'
  },

  h5: {
    color: palette.text.main,
    fontSize: '12px',
    letterSpacing: '0.25em',
    textTransform: 'uppercase'
  }
};
