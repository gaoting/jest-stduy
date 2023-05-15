import fetch from 'node-fetch'

const getFn = (fn) => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ msg: "ok" });
    }, 2000);
  }).then((data) => {
    fn(data);
  });
};

const fetchData = async () => {
  return await fetch(
    "http://gaoting666.cn:3300/api/article/list?pageSize=10&current=1"
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export default {
  fetchData,
  getFn,
};
