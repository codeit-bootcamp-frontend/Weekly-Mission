import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import useFolder from '@/hooks/useFolder';
import Layout from '@/components/Layout';
import FolderHeader from '@/components/FolderHeader';
import FolderMain from '@/components/FolderMain';
import Spinner from '@/components/Spinner';

const Shared = () => {
  const [cardLinks, setCardLinks] = useState([]);
  const {
    status, data, error,
  } = useFolder();

  const handleLoad = useCallback(() => {
    if (data) {
      const { links } = data.data.folder;
      setCardLinks(links);
    }
  }, [data]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

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
          <FolderMain cardLinks={cardLinks} />
        </>
      )}
    </Layout>
  );
};

export default Shared;
