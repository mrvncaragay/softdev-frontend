import axios from 'axios';
import { LOGIN } from './types';

// Login
export const login = input => async dispatch => {
  const { data } = await axios.post('/api/auth');
};
