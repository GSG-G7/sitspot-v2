import axios from 'axios';

const search = qs => axios(`/api/v1/search?${qs}`);
const place = (type, id) => axios(`/api/v1/sitspot?id=${id}&type=${type}`);
const keywords = () => axios('/api/v1/keywords');
const count = () => axios(`/api/v1/count`);

export { search, place, keywords, count };
