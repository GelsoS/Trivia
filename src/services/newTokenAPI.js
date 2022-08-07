const ENDPOINT = 'https://opentdb.com/api_token.php?command=request';

const fetchTokenAPI = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
};

export default fetchTokenAPI;
