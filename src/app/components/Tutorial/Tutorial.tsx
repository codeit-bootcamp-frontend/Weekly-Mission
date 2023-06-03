import React from "react";

interface TutorialProps {
  left?: boolean;
  right?: boolean;
  title: string;
  text: string;
  imageUrl: string;
}

const Tutorial = ({ left = true, right, text, imageUrl }: TutorialProps) => {
  return (
    <article className="tutorial">
      <section className="explanation">
        <div className="text-area">
          <h1>
            <span className="emphasis _1">원하는 링크</span>를 <br />
            저장하세요
          </h1>
          <section className="image-container hidden">
            <img src="images/tutorial_01.png" />
          </section>
          <p>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, <br />
            사고 싶은 옷, 기억하고 싶은 모든 것을 <br />한 공간에 저장하세요.
          </p>
        </div>
      </section>
      <section className="image-container">
        <img src="images/tutorial_01.png" />
      </section>
    </article>
  );
};

export default Tutorial;
