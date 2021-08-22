import axios from 'axios';

const buyPaint = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res)
    .catch((e) => { throw new Error(e); });
  return response;
};

export default buyPaint;
