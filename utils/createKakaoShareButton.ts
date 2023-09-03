const createKaKaoShareButton = (
  sharedURL: string,
  userName: string,
  folderName: string,
) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY_IAN);
    }
    kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: `Shared by ${userName} | Linkbrary`,
        description: `${userName}님이 공유한 ${folderName} 폴더의 링크를 확인해 보세요`,
        imageUrl: "https://i.ibb.co/LQs3LhC/sns-preview.png",
        link: {
          mobileWebUrl: sharedURL,
          webUrl: sharedURL,
        },
      },
      social: {
        likeCount: 254,
        commentCount: 15,
        sharedCount: 68,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: sharedURL,
            webUrl: sharedURL,
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: sharedURL,
            webUrl: sharedURL,
          },
        },
      ],
    });
  }
};

export default createKaKaoShareButton;
