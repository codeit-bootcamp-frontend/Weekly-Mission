class Footer extends HTMLElement {
  constructor() {
    super();
    
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
      footer {
        margin: 0 auto;
        height: 160px;
        background-color: #111322;
      }

      .footer {
        max-width: 1920px;
        margin: 0 auto;
        padding: 32px 104px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .footer-links {
        display: flex;
        gap: 30px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: #CFCFCF;
      }
      
      .copyright {
        display: inline-block;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        width: 105px;
        height: 18px;
        color: #676767;
      }
      
      .footer-link {
        display: inline-block;
        color: #CFCFCF;
        text-decoration: none;
        height: 18px;
      }
      
      .pp {
        width: 100px;
      }
      
      .faq {
        width: 33px;
      }
      
      .social-links {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 13px;
        width: 116px;
        height: 20px;
      } 
      
      .fb {
        width: 18px;
        height: 18px;
      }
      
      .tw {
        width: 19px;
        height: 15.38px;
      }
      
      .yt {
        width: 20px;
        height: 13.34px;
      }
      
      .ig {
        width: 17px;
        height: 17px;
      }

      @media (max-width: 767px) and (min-width: 375px) {
        .footer {
          padding: 32px 0 0;
          position: relative;
          width: 100%;
          font-size: 1rem;
        }
      
        .copyright {
          position: absolute;
          top: 6rem;
          left: 0;
        }
      }
      
    </style>

    <footer>
      <div class="footer">
        <div class="copyright">©codeit - 2023</div>

        <div class="footer-links">
          <a href="privacy.html" class="footer-link pp" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="faq.html" class="footer-link faq" target="_blank" rel="noopener noreferrer">FAQ</a>
        </div>

        <div class="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="../images/facebook.png" class="fb" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="../images/twitter.png" class="tw" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="../images/youtube.png" class="yt" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="../images/instagram.png" class="ig" />
          </a>
        </div>
      </div>
    </footer>
    `;

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
  

}

customElements.define('footer-component', Footer);