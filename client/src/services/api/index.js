import axios from 'axios';

const search = qs => axios(`/api/v1/search?${qs}`);
const place = () => {};

export { search, place };
