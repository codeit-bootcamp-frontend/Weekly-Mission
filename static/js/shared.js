const cardContainer = document.querySelector(".card-container");
const userAvatar = document.querySelector(".user-avatar");
const username = document.querySelector(".username");
const bookmarkTitle = document.querySelector(".bookmark-title");

async function getFolder() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const { data } = await response.json();
    const { folder } = data;
    const { name, owner, links } = folder;

    if (name !== undefined) {
      bookmarkTitle.innerText = name;
    }
    if (owner.profileImageSource !== undefined) {
      userAvatar.src = owner.profileImageSource;
    } else {
      userAvatar.src = "/static/img/default-avatar.png";
    }
    if (owner.name !== undefined) {
      username.innerText = `@${owner.name}`;
    }

    links.forEach((link) => {
      const { imageSource, description, createdAt, url } = link;
      const linkCardElement = document.createElement("link-card");

      if (imageSource !== undefined) {
        linkCardElement.setAttribute("imageSource", imageSource);
      } else {
        linkCardElement.setAttribute(
          "imageSource",
          "/static/img/default-image-source.png"
        );
      }
      if (description !== undefined) {
        linkCardElement.setAttribute("description", description);
      }
      if (url !== undefined) {
        linkCardElement.setAttribute("card-url", url);
      }
      if (createdAt !== undefined) {
        const createdDate = new Date(createdAt);
        const nowDate = new Date();
        const timeDiff = nowDate - createdDate;
        const minuteDiff = parseInt(timeDiff / 1000 / 60);
        const hourDiff = parseInt(timeDiff / 1000 / 60 / 60);
        const dateDiff = parseInt(timeDiff / 1000 / 60 / 60 / 24);
        const monthDiff = parseInt(timeDiff / 1000 / 60 / 60 / 24 / 30);
        const yearDiff = parseInt(timeDiff / 1000 / 60 / 60 / 24 / 365);
        let since = "";
        switch (true) {
          case minuteDiff < 2:
            since = `1 minute ago`;
            break;
          case minuteDiff < 60:
            since = `${minuteDiff} minutes ago`;
            break;
          case hourDiff < 2:
            since = "1 hour ago";
            break;
          case hourDiff < 24:
            since = `${hourDiff} hours ago`;
            break;
          case dateDiff < 2:
            since = "1 day ago";
            break;
          case dateDiff < 31:
            since = `${dateDiff} days ago`;
            break;
          case monthDiff < 2:
            since = "1 month ago";
            break;
          case monthDiff < 12:
            since = `${monthDiff} months ago`;
            break;
          case yearDiff < 2:
            since = "1 year ago";
            break;
          case yearDiff >= 2:
            since = `${yearDiff} months ago`;
            break;
          default:
            break;
        }
        linkCardElement.setAttribute(
          "createdAt",
          Intl.DateTimeFormat().format(createdDate)
        );
        linkCardElement.setAttribute("since", since);
      }
      cardContainer.appendChild(linkCardElement);
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

getFolder();
