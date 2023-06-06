import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from '@/lib/axios';
import Layout from '@/components/Layout';
import FolderHeader from '@/components/FolderHeader';
import FolderMain from '@/components/FolderMain';
import Spinner from '@/components/Spinner';

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
    ],
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const { id } = context.params;

  if (!['1', '2', '3', '4'].includes(id)) {
    return {
      notFound: true,
    };
  }

  try {
    const { data } = await axios.get(`/folder/${id}`);
    const { links } = data.data.folder;

    return {
      props: {
        status: 'success',
        error: null,
        links: links || [],
        paramsId: id,
      },
    };
  } catch (error) {
    console.error(`axios error: ${error}`);

    return {
      props: {
        status: 'success',
        error: null,
        links: [],
        paramsId: id,
      },
    };
  }
};

const Folder = ({
  status, error, links, paramsId,
}) => {
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
          <FolderMain endPoint={paramsId} cardLinks={links} />
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
  paramsId: PropTypes.string.isRequired,
};

export default Folder;
