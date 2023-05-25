export const fetchWords = async (url) => {
  try {
    const response = await fetch(url);
    console.log(response);
    return await response.json();
  } catch (error) {
    console.log('Error getting data: ', error);
  }
};
