const baseURL = "https://bootcamp-api.codeit.kr/api";

async function fetchUser(id) {
  const res = await fetch(`${baseURL}/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getUser(id) {
  const resObj = await fetchUser(id);
  const { data } = resObj;
  return data ? data[0] : null;
}

export { getUser };
