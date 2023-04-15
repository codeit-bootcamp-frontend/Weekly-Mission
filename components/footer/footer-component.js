class FooterComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/footer/footer-component.css");
    shadow.appendChild(linkElem);

    const footerContainer = document.createElement("footer");

    const footerWrap = document.createElement("div");
    footerWrap.classList.add("footer-wrap");

    const copyRight = document.createElement("p");
    copyRight.classList.add("copyright");
    copyRight.textContent = "©codeit - 2023";

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

    const footerImgs = document.createElement("div");
    footerImgs.classList.add("footer-imgs");

    const facebook = document.createElement("a");
    facebook.href = "https://ko-kr.facebook.com/";

    const facebookImg = document.createElement("img");
    facebookImg.alt = "facebook";
    facebookImg.src = "/static/imgs/facebook.svg";
    facebook.appendChild(facebookImg);

    const twitter = document.createElement("a");
    twitter.href = "https://twitter.com/?lang=ko";

    const twitterImg = document.createElement("img");
    twitterImg.alt = "twitter";
    twitterImg.src = "/static/imgs/twitter.svg";
    twitter.appendChild(twitterImg);

    const youtube = document.createElement("a");
    youtube.href = "https://www.youtube.com/?gl=KR";

    const youtubeImg = document.createElement("img");
    youtubeImg.alt = "youtube";
    youtubeImg.src = "/static/imgs/youtube.svg";
    youtube.appendChild(youtubeImg);

    const instagram = document.createElement("a");
    instagram.href = "https://www.instagram.com/";

    const instaImg = document.createElement("img");
    instaImg.alt = "insta";
    instaImg.src = "/static/imgs/insta.svg";
    instagram.appendChild(instaImg);

    footerImgs.appendChild(facebook);
    footerImgs.appendChild(twitter);
    footerImgs.appendChild(youtube);
    footerImgs.appendChild(instagram);

    footerWrap.appendChild(copyRight);
    footerWrap.appendChild(privacyPolicyFaq);
    footerWrap.appendChild(footerImgs);

    footerContainer.appendChild(footerWrap);

    shadow.appendChild(footerContainer);
  }
}

customElements.define("footer-component", FooterComponent);
