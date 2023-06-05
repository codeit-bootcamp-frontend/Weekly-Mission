import { useEffect, useState } from 'react';
import Head from 'next/head';
// import PropTypes from 'prop-types';
// import axios from '@/lib/axios';
import { getFolders } from '@/lib/api';
import Layout from '@/components/Layout';
import SharedHeader from '@/components/SharedHeader';
import SharedMain from '@/components/SharedMain';
import defaultOwnerImage from '@/public/default-avatar.svg';

// eslint-disable-next-line react-refresh/only-export-components
// export const getStaticProps = async () => {
//   let ownerImage = '';
//   let ownerName = '';
//   let folderName = '';
//   let cardLinks = [];
//   try {
//     const res = await axios.get('/folder');
//     const { folder } = res.data;
//     folderName = folder.name;
//     cardLinks = folder.links;
//     const { owner } = folder;
//     ownerName = owner.name;
//     ownerImage = owner.profileImageSource;
//   } catch {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       ownerImage: ownerImage || defaultOwnerImage,
//       ownerName,
//       folderName,
//       cardLinks,
//     },
//   };
// };

const Shared = () => {
  const [ownerImage, setOwnerImage] = useState(defaultOwnerImage);
  const [ownerName, setOwnerName] = useState('');
  const [folderName, setFolderName] = useState('');
  const [cardLinks, setCardLinks] = useState([]);

  const getFolderData = async () => {
    const { data } = await getFolders();
    if (!data) return;
    const { name, owner } = data.folder;
    setOwnerImage(owner.profileImageSource);
    setOwnerName(owner.name);
    setFolderName(name);
  };

  const getLinks = async () => {
    const { data } = await getFolders();
    if (!data) return;
    const { links } = data.folder;
    setCardLinks(links);
  };

  useEffect(() => {
    getFolderData();
  }, []);

  // 나중에 Links는 업데이트가 따로 필요할 수 있으므로 getFolderData와 다른 곳에 작성했습니다.
  useEffect(() => {
    getLinks();
  }, []);

  return (
    <Layout>
      <Head>
        <title>즐겨찾기 | Linkbrary</title>
      </Head>
      <SharedHeader
        ownerName={ownerName}
        ownerImage={ownerImage}
        folderName={folderName}
      />
      <SharedMain cardLinks={cardLinks} />
    </Layout>
  );
};

// Shared.propTypes = {
//   ownerImage: PropTypes.string.isRequired,
//   ownerName: PropTypes.string.isRequired,
//   folderName: PropTypes.string.isRequired,
//   cardLinks: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       createdAt: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       imageSource: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default Shared;
