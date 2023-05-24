const fetchWords = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error getting data: ', error);
  }
};

export default fetchWords;
