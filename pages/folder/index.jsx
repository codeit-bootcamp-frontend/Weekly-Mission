import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getFolders } from '@/lib/api';
import Layout from '@/components/Layout';
import FolderHeader from '@/components/FolderHeader';
import FolderMain from '@/components/FolderMain';

const Shared = () => {
  const [cardLinks, setCardLinks] = useState([]);

  const getLinks = async () => {
    const { data } = await getFolders();
    if (!data) return;
    const { links } = data.folder;
    setCardLinks(links);
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <Layout>
      <Head>
        <title>폴더 | Linkbrary</title>
      </Head>
      <FolderHeader />
      <FolderMain cardLinks={cardLinks} />
    </Layout>
  );
};

export default Shared;
