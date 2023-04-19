import { timeForToday } from '../../lib/calculatedTime.js';

const container = document.querySelector('.container');
console.log(container);
async function getInfo() {
  const response = await fetch(
    'https://bootcamp-api.codeit.kr/api/sample/folder'
  );
  const result = await response.json();
  result.data.folder.links.forEach((item) => {
    const card = document.createElement('tony-card');
    // 작성 시간
    const postTimeComparison = timeForToday(item.createdAt);

    card.setAttribute('src', item.imageSource);
    card.setAttribute('description', item.description);
    card.setAttribute('postTimeComparison', postTimeComparison);
    card.setAttribute(
      'post-date',
      new Intl.DateTimeFormat('kr').format(new Date(item.createdAt))
    );

    container.appendChild(card);
  });
}

getInfo();
