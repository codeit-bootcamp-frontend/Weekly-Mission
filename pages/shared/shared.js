const container = document.querySelector('class');

async function getInfo() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/folder'
  );
  const result = await response.json();
  result.data.folder.links.forEach((item) => {
    const card = document.createElement('tony-card');
    console.log(card);
  });
}

getInfo();
