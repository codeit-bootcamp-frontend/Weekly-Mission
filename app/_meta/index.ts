export const META_ROOT = {
  title: {
    template: "%s : Linkbrary",
    default: "Linkbrary",
  },
  openGraph: {
    title: "Linkbrary",
    description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
    // CHECK: 서버 URL
    url: "https://weekly-mission-git-ian-react-week14-codeit-bootcamp.vercel.app",
    type: "website",
    images: [
      {
        url: "/sns-preview.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkbrary",
    description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
    images: ["/sns-preview.png"],
  },
};

export const META_SHARED = {
  title: "Shared",
};

export const META_FOLDER = {
  title: "Folder",
};
