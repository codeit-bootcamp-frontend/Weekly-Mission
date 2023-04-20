const template = document.createElement("template");
template.innerHTML = `
  <style>
    @import url("/static/css/global.css");

    p {
      margin: 0;
    }

    #navbar {
      z-index: 1;
      position: fixed;
      inset: 0;
      height: 9.4rem;
      background-color: var(--navbar-background);
    }
  
    #navbar #navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 2rem 20rem;
      max-width: 1920px;
    }
  
    #navbar-container #logo img {
      width: 13.3rem;
    }
  
    #navbar-container #gnb-login-button {
      cursor: pointer;
      width: 12.8rem;
      text-align: center;
      border-radius: 0.8rem;
      padding: 1.6rem 0;
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--gray6);
      background: linear-gradient(90deg, var(--primary), var(--light-primary));
    }

    #gnb-profile {
      display: none;
      justify-content: end;
      gap: 0.6rem;
      text-align: center;
      line-height: 2.8rem;
      font-size: 1.4rem;
    }

    #gnb-profile #icon-container {
      cursor: pointer;
      width: 2.8rem;
      border-radius: 7rem;
      background-color: var(--primary);
    }

    #gnb-profile #profile-email {
      color: var(--profile-email);
    }

    @media (min-width: 768px) and (max-width: 1199px) {
      #navbar #navbar-container {
        max-width: 86.4rem;
        padding: 2rem 3.2rem;
      }
    }

    @media (max-width: 767px) {
      #navbar {
        height: 6.3rem;
        margin: 0;
        padding: 0 3.2rem;
      }
    
      #navbar #navbar-container {
        padding: 1.3rem 0;
      }
    
      #navbar-container #logo img {
        width: 7.7rem;
      }
      
      #navbar-container #gnb-login-button {
        width: 8rem;
        padding: 1rem 0;
        font-size: 1.4rem;
      }

      #gnb-profile {
      }

      #gnb-profile #profile-email {
        display: none;
      }
    }
  </style>
  <nav id="navbar">
    <div id="navbar-container">
      <div id="logo">
        <a href="/">
          <img src="/static/Linkbrary.png" alt="Linkbrary Logo">
        </a>
      </div>
      <div id="gnb-login-button">
        로그인
      </div>
      <div id="gnb-profile">
        <div id="icon-container">
          <img id="abc" alt="Default profile icon" width="10">
        </div>
        <p id="profile-email"></p>
      </div>
    </div>
  </nav>
`;

class Gnb extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    
    const login = this.getAttribute("login");
    const loginButton = this.shadowRoot.getElementById("gnb-login-button");
    const profile = this.shadowRoot.getElementById("gnb-profile");
    const profileButton = this.shadowRoot.getElementById("icon-container");

    loginButton.addEventListener('click', () => location.href='/signin');
    
    if (login === "on") {
      profile.style.display = "flex";
      loginButton.style.display = "none";
    } else {
      profile.style.display = "none";
      loginButton.style.display = "block";
    }

    profileButton.addEventListener('click', () => location.href='/my-link');

    // fetch('https://bootcamp-api.codeit.kr/api/sample/folder')
    //   .then((response) => response.json())
    //   .then((result) => result.data.folder)
    //   .then((result) => {
    //     const { links } = result
    //   })
    
    const profileEmail = this.shadowRoot.getElementById("profile-email")
    const profileImage = this.shadowRoot.getElementById("abc")

    fetch('https://bootcamp-api.codeit.kr/api/sample/user')
      .then((response) => response.json())
      .then((result) => result.data)
      .then((user) => {
        const { email, profileImageSource } = user
        console.log(email, profileImageSource)
        profileEmail.innerText = email
        profileImage.src = profileImageSource
      })
      
  }
}

customElements.define("global-nav", Gnb);
