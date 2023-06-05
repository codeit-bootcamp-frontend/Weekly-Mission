/* eslint-disable no-nested-ternary */
import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
// import PropTypes from 'prop-types';
// import axios from '@/lib/axios';
import useFolder from '@/hooks/useFolder';
import Layout from '@/components/Layout';
import SharedHeader from '@/components/SharedHeader';
import SharedMain from '@/components/SharedMain';
import Spinner from '@/components/Spinner';
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
  const {
    status, data, error,
  } = useFolder();

  const handleLoad = useCallback(() => {
    if (data) {
      const { name, owner, links } = data.data.folder;
      setOwnerImage(owner.profileImageSource);
      setOwnerName(owner.name);
      setFolderName(name);
      setCardLinks(links);
    }
  }, [data]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <Layout>
      <Head>
        <title>즐겨찾기 | Linkbrary</title>
      </Head>
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <div>
          {`Error: ${error.message}`}
        </div>
      ) : (
        <>
          <SharedHeader
            ownerName={ownerName}
            ownerImage={ownerImage}
            folderName={folderName}
          />
          <SharedMain cardLinks={cardLinks} />
        </>
      )}
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
