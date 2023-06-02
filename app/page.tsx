import Image from "next/image";
import "./page.css";

import img1 from "/public/_img1.svg";
import img2 from "/public/img2.svg";
import img3 from "/public/img3.svg";
import img4 from "/public/_img4.svg";
import dim from "/public/image 25.svg";

const Home = () => {
  return (
    <>
      <div className="header-section">
        <section className="header-content">
          <p>
            세상의 모든 정보<span>를</span>
          </p>
          <div className="p-box">
            <span>쉽게 저장하고</span>
            <span>관리해 보세요.</span>
          </div>
          <button>링크 추가하기</button>
          <div className="img-box">
            <Image src={dim} alt="dim" />
          </div>
        </section>
      </div>
      <main>
        <div className="main-container">
          <section className="save-link container">
            <p className="title-box">
              <span>원하는 링크</span>를 <br />
              저장하세요
            </p>
            <p className="additional-explanation">
              나중에 읽고 싶은 글, 다시 보고싶은 영상, <br />
              사고 싶은 옷, 기억하고 싶은 모든 것을
              <br />한 공간에 저장하세요.
            </p>
            <div className="img-box">
              <Image src={img1} alt="link" />
            </div>
          </section>
          <section className="folder container">
            <div className="img-box">
              <Image src={img2} alt="folder" />
            </div>
            <p className="title-box">
              링크를 폴더로 <br />
              <span>관리</span>하세요
            </p>
            <p className="additional-explanation">
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있어요.
            </p>
          </section>
          <section className="share container">
            <p className="title-box">
              저장한 링크를 <br />
              <span>공유</span>해 보세요.
            </p>
            <p className="additional-explanation">
              여러 링크를 폴더에 담고 공유할 수 있습니다. <br />
              가족, 친구, 동료들에게 쉽고 빠르게 링크를
              <br />
              공유해 보세요.
            </p>
            <div className="img-box">
              <Image src={img3} alt="share" />
            </div>
          </section>
          <section className="search container">
            <div className="img-box">
              <Image src={img4} alt="share" />
            </div>
            <p className="title-box">
              저장한 링크를 <br />
              <span>검색</span>해 보세요.
            </p>
            <p className="additional-explanation">
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
