import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from '@/lib/axios';
import { CardPropTypes } from '@/lib/constants';
import Layout from '@/components/Layouts/Layout';
import FolderHeader from '@/components/FolderHeader';
import FolderMain from '@/components/FolderMain';
import Spinner from '@/components/Spinner';

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get('/folder/favorites');
    const { links } = data.data.folder;

    return {
      props: {
        status: 'success',
        error: null,
        links: links || [],
      },
    };
  } catch (error) {
    console.error(`axios error: ${error}`);

    return {
      props: {
        status: 'success',
        error: null,
        links: [],
      },
    };
  }
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
          <FolderMain endPoint="favorites" cardLinks={links} />
        </>
      )}
    </Layout>
  );
};

Folder.propTypes = {
  status: PropTypes.oneOf(['loading', 'error', 'success']).isRequired,
  error: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)).isRequired,
};

export default Folder;
