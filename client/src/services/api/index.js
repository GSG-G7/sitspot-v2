import axios from 'axios';

const search = qs => axios(`/api/v1/search?${qs}`);
const place = (type, id) => axios(`/api/v1/sitspot?id=${id}&type=${type}`);
const keywords = () => axios('/api/v1/keywords');
const randomplaces = () => axios('/api/v1/randomplaces');
const count = () => axios(`/api/v1/count`);
const addPlace = formData =>
  axios.post('/api/v1/sitspot', formData, {
    headers: { 'content-type': 'multipart/formdata' },
  });

export { search, place, keywords, randomplaces, count, addPlace };
