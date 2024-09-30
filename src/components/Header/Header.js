import React from 'react';
import CustomButton from '../UI/Button/CustomButton';
import './Header.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      const top = formElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Логотип" loading="lazy" />
      </div>
      <CustomButton variant="header" onClick={scrollToForm}>
        Зареєструватися
      </CustomButton>
    </header>
  );
};

export default Header;
