import Head from 'next/head';
import Account from '@/components/Account';

const Signin = () => {
  return (
    <>
      <Head>
        <title>로그인 | Linkbrary</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Account isSignin />
    </>
  );
};

export default Signin;
