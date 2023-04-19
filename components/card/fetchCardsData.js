export async function fetchCardsData(url) {
  try {
    const response = await fetch(url);
    console.log(url);
    const data = await response.json();
    return data.cards;
  } catch (error) {
    console.log(error);
    return [];
  }
}
