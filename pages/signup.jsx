import Head from 'next/head';
import Account from '@/components/Account';

const Signup = () => {
  return (
    <>
      <Head>
        <title>회원가입 | Linkbrary</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Account />
    </>
  );
};

export default Signup;
