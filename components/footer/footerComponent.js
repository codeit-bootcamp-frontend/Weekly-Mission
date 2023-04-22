class FooterComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  createLinkElement() {
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/footer/footer-component.css");
    return linkElem;
  }

  createCopyRightElement() {
    const copyRight = document.createElement("p");
    copyRight.textContent = "©codeit - 2023";
    copyRight.classList.add("copyright");
    return copyRight;
  }

  createPrivacyPolicyFaqElement() {
    const privacyPolicyFaq = document.createElement("div");
    privacyPolicyFaq.classList.add("privacy-policy-faq");

    const privacyPolicy = document.createElement("a");
    privacyPolicy.classList.add("privacy-policy");
    privacyPolicy.textContent = "Privacy Policy";
    privacyPolicy.href = "./privacy";

    const faq = document.createElement("a");
    faq.classList.add("faq");
    faq.textContent = "FAQ";
    faq.href = "./faq";

    privacyPolicyFaq.appendChild(privacyPolicy);
    privacyPolicyFaq.appendChild(faq);

    return privacyPolicyFaq;
  }

  createFooterImgsElement() {
    const footerImgs = document.createElement("div");
    footerImgs.classList.add("footer-imgs");
    const socialMediaLinks = [
      {
        href: "https://ko-kr.facebook.com/",
        alt: "facebook",
        src: "/static/imgs/facebook.svg",
      },
      {
        href: "https://twitter.com/?lang=ko",
        alt: "twitter",
        src: "/static/imgs/twitter.svg",
      },
      {
        href: "https://www.youtube.com/?gl=KR",
        alt: "youtube",
        src: "/static/imgs/youtube.svg",
      },
      {
        href: "https://www.instagram.com/",
        alt: "insta",
        src: "/static/imgs/insta.svg",
      },
    ];

    for (let i = 0; i < socialMediaLinks.length; i++) {
      const socialMediaLink = document.createElement("a");
      socialMediaLink.href = socialMediaLinks[i].href;

      const socialMediaImg = document.createElement("img");
      socialMediaImg.alt = socialMediaLinks[i].alt;
      socialMediaImg.src = socialMediaLinks[i].src;
      socialMediaLink.appendChild(socialMediaImg);
      footerImgs.appendChild(socialMediaLink);
    }
    return footerImgs;
  }

  createFooterWrapElement() {
    const footerWrap = document.createElement("div");
    footerWrap.classList.add("footer-wrap");

    footerWrap.appendChild(this.createCopyRightElement());
    footerWrap.appendChild(this.createPrivacyPolicyFaqElement());
    footerWrap.appendChild(this.createFooterImgsElement());

    return footerWrap;
  }

  render() {
    const footerContainer = document.createElement("footer");
    footerContainer.appendChild(this.createLinkElement());
    footerContainer.appendChild(this.createFooterWrapElement());

    this.shadowRoot.appendChild(footerContainer);
  }
}

customElements.define("footer-component", FooterComponent);
