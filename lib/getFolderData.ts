const getFolderData = async () => {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data`);
  }

  const data = await res.json();
  return data?.data?.folder;
};

export default getFolderData;
