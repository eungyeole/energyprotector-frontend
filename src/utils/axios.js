import axios from "axios";

const DOMAIN = "https://energyprotector.run.goorm.io";
axios.defaults.withCredentials = false; // 쿠키 데이터를 전송받기 위해
export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export const requesth = (method, url, headers) => {
  return axios({
    method,
    url: DOMAIN + url,
    headers:{'Authorization' : 'Bearer ' + headers},
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};