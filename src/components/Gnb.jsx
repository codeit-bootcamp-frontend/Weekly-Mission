import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userData from "/src/api/userapi.js";
import styles from "/src/components/Gnb.module.css";

function Gnb() {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [data, setdata] = useState(null);

  useEffect(()=>{
    async function fetchData(){
      const data = await userData();
      setdata(data)
    }
    fetchData()
  },[])
  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>
            <Link to="/" className={styles.logo}></Link>
          </h1>
          {isLoggedIn ? 
            <div className={styles.user}>
              <img className={styles.userIcon} src={data && data.profileImageSource}/>
              <span className={styles.userEmail}>{data && data.email}</span>
            </div>
           : 
            <a href="/signin.html" className={styles.loginBtn}>
              로그인
            </a>
          }
        </div>
      </header>
    </>
  );
}

export default Gnb;
