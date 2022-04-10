const fetchAPI = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  console.log(data);
  return data;
};

export default fetchAPI;
