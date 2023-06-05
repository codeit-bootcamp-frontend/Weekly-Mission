import Head from 'next/head';
import Account from '@/components/Account';

const Signin = () => {
  return (
    <>
      <Head>
        <title>로그인 | Linkbrary</title>
      </Head>
      <Account isSignin />
    </>
  );
};

export default Signin;
