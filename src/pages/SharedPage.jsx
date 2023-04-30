import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "@components/SearchBar";
import CardList from "@components/CardList";
import FolderInfo from "@components/FolderInfo";
import useFetchData from "@hooks/useFetchData";

const SharedPage = () => {
  const { data, isLoading, error } = useFetchData("/api/sample/folder");

  const [folder, setFolder] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setFolder(data.folder ? data.folder : null);
    setCards(data.folder && data.folder.links ? data.folder.links : []);
  }, [data]);

  return (
    <>
      <HearoSection>
        <FolderInfo folder={folder} />
      </HearoSection>
      <Wrapper>
        <SearchBar />
        <CardList cards={cards} />
      </Wrapper>
    </>
  );
};

export default SharedPage;

const HearoSection = styled.div`
  text-align: center;
  padding: 2rem 0 6rem;
  background-color: var(--library-white-smoke);

  @media screen and (max-width: 767px) {
    text-align: center;
    padding: 1rem 0 4rem;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 106rem;

  @media screen and (max-width: 1100px) {
    max-width: 70.4rem;
  }
  @media screen and (max-width: 767px) {
    max-width: 32.5rem;
  }
`;
