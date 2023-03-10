import React from "react";
import styles from "./Home.module.css";
import { Link,useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color:'#FFF',
    fontWeight:'700',
    fontSize:'17px',
    textDecoration:'none',
    marginLeft:'10px',
  }

  const navigate = useNavigate();

  const startRegister = () => {
    navigate("/register")
    console.log("Hello from function")
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to the MERNstack !" icon="logo">
        <p className={styles.text}>
          We’re working hard to get MERNstack ready for everyone ! While we wrap
          up the finishing touches, we’re adding people gradually to make sure
          nothing breaks 🤭
        </p>
        <div>
          {/* <button>
            <span>Get your username</span>
            <img src="/images/arrow-forward.png" alt="arrow-forward" />
          </button> */}
        <Button onClick={startRegister} text="Get your username"/>
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text ?</span>
          <Link style={signInLinkStyle} to="/login">Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
