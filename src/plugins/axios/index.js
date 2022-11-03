import axios from 'axios';
import interceptors from '@/plugins/interceptors';

const instance = axios.create({
  baseURL: '',
});

// interceptors(instance);
export default instance;
