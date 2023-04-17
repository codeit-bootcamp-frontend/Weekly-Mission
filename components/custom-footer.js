class CustomFooter extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    const shadowRoot = this.attachShadow({ mode: "open" });

    const footer = document.createElement("footer");

    // 1. 기업 정보
    const corporationWrapper = document.createElement("div");
    corporationWrapper.setAttribute("class", "corporation");
    corporationWrapper.textContent = "@codeit - 2023";

    // 2. privacyPolicy, faq
    const moreInformationWrapper = document.createElement("ul");
    moreInformationWrapper.setAttribute("class", "more-information");

    const privacyPolicy = document.createElement("li");
    const privacyPolicyLink = document.createElement("a");
    privacyPolicyLink.setAttribute("href", "/privacy/");
    privacyPolicyLink.textContent = "Privacy Policy";

    const faq = document.createElement("li");
    const faqLink = document.createElement("a");
    faqLink.setAttribute("href", "/faq/");
    faqLink.textContent = "FAQ";

    privacyPolicy.appendChild(privacyPolicyLink);
    faq.appendChild(faqLink);
    moreInformationWrapper.appendChild(privacyPolicy);
    moreInformationWrapper.appendChild(faq);

    // 3. 사이트 sns
    const snsWrapper = document.createElement("ul");
    snsWrapper.setAttribute("class", "sns-container");

    const links = ["https://facebook.com/", "https://twitter.com/", "https://www.youtube.com/", "https://www.instagram.com/"];
    const sources = ["facebook.svg", "twitter.svg", "youtube.svg", "instagram.svg"];

    for (let i = 0; i < 4; i++) {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.setAttribute("href", links[i]);
      link.setAttribute("target", "_blank");

      const img = document.createElement("img");
      img.setAttribute("src", "/images/" + sources[i]);

      link.appendChild(img);
      li.appendChild(link);

      snsWrapper.appendChild(li);
    }

    const style = document.createElement("style");
    style.textContent = `
      @import "/static/css/main.css";
      
      footer {
        box-sizing: border-box;
        height: 16rem;
        padding: 3.2rem 10.4rem 10.8rem;
        background-color: var(--black);
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: Arial, Helvetica, sans-serif;
      }
      
      .corporation {
        font-size: 1.6rem;
        color: #676767;
        font-weight: 400;
        flex-basis: 11.6rem;
      }
      
      .more-information li:first-child {
        margin-right: 3rem;
      }
      
      .more-information li a {
        font-weight: 400;
        font-size: 1.6rem;
        color: #cfcfcf;
      }
      
      footer ul > li {
        display: inline-block;
      }
      
      .sns-container {
        flex-basis: 11.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      @media (max-width: 767px) {
        footer {
          display: grid;
          grid-template: repeat(2, 1fr) / repeat(2, auto);
          height: 16rem;
          padding: 3.2rem;
          align-items: initial;
        }
      
        footer .corporation {
          order: 1;
          align-self: flex-end;
        }
      
        footer .sns-container {
          width: 11.6rem;
          height: 2rem;
        }
      }
    `;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(footer);
    footer.appendChild(corporationWrapper);
    footer.appendChild(moreInformationWrapper);
    footer.appendChild(snsWrapper);
  }
}

customElements.define("custom-footer", CustomFooter);
