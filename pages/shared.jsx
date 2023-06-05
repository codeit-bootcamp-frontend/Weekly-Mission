import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from '@/lib/axios';
import Layout from '@/components/Layout';
import SharedHeader from '@/components/SharedHeader';
import SharedMain from '@/components/SharedMain';
import Spinner from '@/components/Spinner';
import defaultOwnerImage from '@/public/default-avatar.svg';

export const getStaticProps = async () => {
  const { data, error, isLoading } = await axios.get('/folder');

  if (error) {
    return {
      props: {
        status: 'error',
        error: error.message,
        ownerName: '',
        ownerImage: defaultOwnerImage,
        folderName: '',
        cardLinks: [],
      },
    };
  }

  if (isLoading) {
    return {
      props: {
        status: 'loading',
        error: null,
        ownerName: '',
        ownerImage: defaultOwnerImage,
        folderName: '',
        cardLinks: [],
      },
    };
  }

  const { name, owner, links } = data.data.folder;

  return {
    props: {
      status: 'success',
      error: null,
      ownerName: owner.name,
      ownerImage: owner.profileImageSource,
      folderName: name,
      cardLinks: links,
    },
  };
};

const Shared = ({
  status, error, ownerName, ownerImage, folderName, cardLinks,
}) => {
  return (
    <Layout>
      <Head>
        <title>즐겨찾기 | Linkbrary</title>
      </Head>
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <div>
          {`Error: ${error}`}
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

Shared.propTypes = {
  status: PropTypes.oneOf(['loading', 'error', 'success']).isRequired,
  error: PropTypes.string,
  ownerImage: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  folderName: PropTypes.string.isRequired,
  cardLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSource: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Shared;
