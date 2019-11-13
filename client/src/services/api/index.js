import axios from 'axios';

const search = qs => axios(`/api/v1/search?${qs}`);
const place = (type, id) => axios(`/api/v1/place?id=${id}&type=${type}`);

export { search, place };
