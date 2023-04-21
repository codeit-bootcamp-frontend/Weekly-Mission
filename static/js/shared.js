const cardContainer = document.querySelector('.card-container')

async function getFolder() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const { data }  = await response.json();
  const { links } = data.folder
  links.forEach((link) => {
  const { imageSource, description, createdAt, url } = link
  const linkCardElement = document.createElement("link-card")
  
  if (imageSource !== undefined) {
    linkCardElement.setAttribute("imageSource", imageSource)
  } else {
    linkCardElement.setAttribute("imageSource", "/static/img/default-image-source.png")
  }

  if (description !== undefined) {
    linkCardElement.setAttribute("description", description)
  }


  if (url !== undefined) {
    linkCardElement.setAttribute("card-url", url)
  }

  if (createdAt !== undefined) {
    const createdDate = new Date(createdAt);
    const nowDate = new Date()
    const timeDiff = nowDate - createdDate;
    const minuteDiff = parseInt(timeDiff / 1000 / 60);
    const hourDiff = parseInt(timeDiff / 1000 / 60 / 60);
    const dateDiff = parseInt(timeDiff / 1000 / 60 / 60 / 24);
    const monthDiff = parseInt(timeDiff / 1000 / 60 / 60 / 24 / 30);
    const yearDiff = parseInt(timeDiff / 1000 / 60 / 60 / 24 / 365);
    let since = "";
    if (minuteDiff < 2) {
      since = `1 minute ago`;
    } else if (minuteDiff < 60) {
      since = `${minuteDiff} minutes ago`
    } else if (hourDiff < 2) {
      since = "1 hour ago";
    } else if (hourDiff < 24) {
      since = `${hourDiff} hours ago`
    } else if (dateDiff < 2) {
      since = "1 day ago";
    } else if (dateDiff < 31) {
      since = `${dateDiff} days ago`
    } else if (monthDiff < 2) {
      since = "1 month ago";
    } else if (monthDiff < 12) {
      since = `${monthDiff} months ago`
    } else if (yearDiff < 2) {
      since = "1 year ago";
    } else if (yearDiff >= 2) {
      since = `${yearDiff} months ago`
    }
    linkCardElement.setAttribute("createdAt", Intl.DateTimeFormat().format(createdDate))
    linkCardElement.setAttribute("since", since)
  }

  cardContainer.appendChild(linkCardElement)
  })
}
getFolder();
