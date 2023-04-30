import { Helmet } from "react-helmet-async";
import styled from "styled-components";
// import { getFolders } from "utils/api";

// async function getFolderData() {
//   const folders = await getFolders();
//   console.log(folders);
// }

const Container = styled.div`
  height: 100rem;
  text-align: center;
`;

function SharedPage() {
  // getFolderData();
  return (
    <>
      <Helmet>
        <title>즐겨찾기 | Linkbrary</title>
      </Helmet>
      <Container>PrivacyPage</Container>;
    </>
  );
}

export default SharedPage;
