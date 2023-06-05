import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from '@/lib/axios';
import Layout from '@/components/Layout';
import FolderHeader from '@/components/FolderHeader';
import FolderMain from '@/components/FolderMain';
import Spinner from '@/components/Spinner';

export const getStaticProps = async () => {
  const { data, error, isLoading } = await axios.get('/folder');

  if (error) {
    return {
      props: {
        status: 'error',
        error: error.message,
        links: [],
      },
    };
  }

  if (isLoading) {
    return {
      props: {
        status: 'loading',
        error: null,
        links: [],
      },
    };
  }

  const { links } = data.data.folder;

  return {
    props: {
      status: 'success',
      error: null,
      links,
    },
  };
};

const Folder = ({ status, error, links }) => {
  return (
    <Layout>
      <Head>
        <title>폴더 | Linkbrary</title>
      </Head>
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <div>
          {`Error: ${error.message}`}
        </div>
      ) : (
        <>
          <FolderHeader />
          <FolderMain cardLinks={links} />
        </>
      )}
    </Layout>
  );
};

Folder.propTypes = {
  status: PropTypes.oneOf(['loading', 'error', 'success']).isRequired,
  error: PropTypes.string,
  links: PropTypes.arrayOf(
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

export default Folder;
