import { useEffect, useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from '@/lib/axios';
import { CARD_PROP_TYPES } from '@/lib/constants';
import Layout from '@/components/Layouts/Layout';
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
  const [exceedThreshold, setExceedThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 222;

      setExceedThreshold(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <FolderHeader exceedThreshold={exceedThreshold} />
          <FolderMain endPoint="" cardLinks={links} exceedThreshold={exceedThreshold} />
        </>
      )}
    </Layout>
  );
};

Folder.propTypes = {
  status: PropTypes.oneOf(['loading', 'error', 'success']).isRequired,
  error: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape(CARD_PROP_TYPES)).isRequired,
};

export default Folder;
