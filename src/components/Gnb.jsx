import { useState } from "react";
import styled from "styled-components";
import LogoImg from "@/assets/images/Linkbrary.svg";

export default function Gnb() {
  const [prop, setProp] = useState(null);

  return (
    <>
      <GnbContainer>
        <a href="/">
          <Logo alt="logo" src={LogoImg} />
        </a>
        {prop ? (
          <Profile>
            <ProfileIcon src={prop.profileSrc} />
            <UserEmail>{prop.email}</UserEmail>
          </Profile>
        ) : (
          <Login href="/signin/">로그인</Login>
        )}
      </GnbContainer>
    </>
  );
}
