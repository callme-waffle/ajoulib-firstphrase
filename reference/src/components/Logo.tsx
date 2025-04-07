import React from 'react';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
  return (
    <div className={styles.logoContainer}>
      {/* 방법 1: 절대 경로 사용 */}
      <img 
        src="/ajoulib_logo_4x.png" 
        alt="아주대학교 도서관 로고" 
        className={styles.logoImage}
      />
      
      {/* 방법 2: import 사용 */}
      {/* import logo from '/ajoulib_logo_4x.png';
      <img 
        src={logo} 
        alt="아주대학교 도서관 로고" 
        className="logo-image"
      /> */}
    </div>
  );
};

export default Logo; 