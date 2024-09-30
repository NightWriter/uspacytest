import React, { useState, useEffect, useRef, useMemo } from 'react';
import './HeroSection.scss';
import CustomButton from '../UI/Button/CustomButton';
import arrow from '../../assets/arrow-down.svg';

const HeroSection = () => {
  const words = useMemo(() => [
    'підприємництво',
    'мрію',
    'перемогу',
    'сенси',
    'майбутнє',
    'лідерство',
    'місію',
    'бізнес',
    'візію',
    'допомогу',
  ], []);

  const [currentWord, setCurrentWord] = useState(words[0]);
  const sectionRef = useRef(null);
  const [visibleElements, setVisibleElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementsToShow = entry.target.querySelectorAll('.fade-in-text');

          elementsToShow.forEach((element, index) => {
            setTimeout(() => {
              setVisibleElements((prev) => [...prev, index]);
            }, index * 200);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [words]);

  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form'); // Замените на ID вашей формы
    if (formElement) {
      const top = formElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__content">
        <div className="hero__conference hero__conference--rotate">
          <p className={`fade-in-text ${visibleElements.includes(0) ? 'fade-in' : ''}`}>Онлайн-конференція</p>
          <div></div>
          <p className={`fade-in-text ${visibleElements.includes(1) ? 'fade-in' : ''}`}>30 квітня о 10:00</p>
        </div>
        <div className="hero__title">
          <p className={`fade-in-text ${visibleElements.includes(2) ? 'fade-in' : ''}`}>Ми віримо у</p>
          <p className="hero__changing-word">{currentWord}</p>
        </div>

        <CustomButton variant="primary" onClick={scrollToForm}>
          Зареєструватися
        </CustomButton>
        <div className="hero__about">
          <div className="about-title">
            <p className={`fade-in-text ${visibleElements.includes(3) ? 'fade-in' : ''}`}>Про що ця</p>
            <p className={`fade-in-text ${visibleElements.includes(4) ? 'fade-in' : ''}`}>онлайн-конференція</p>
          </div>
          <p className={`fade-in-text ${visibleElements.includes(5) ? 'fade-in' : ''} hero__about-text`}>
            Щодня ми ходимо на роботу, зустрічаємося з друзями, донатимо на Перемогу, робимо рутинні речі. Але чи замислюємося ми щодня навіщо це все? Чи є у цьому сенс? Чи бачимо ми своє майбутнє? Чи мріємо ми?
          </p>
        </div>
      </div>
      <div className="hero__bottom">
        <div className="hero__conference">
          <p className={`fade-in-text ${visibleElements.includes(6) ? 'fade-in' : ''}`}>Безкоштовна онлайн-конференція</p>
          <div></div>
          <p className={`fade-in-text ${visibleElements.includes(7) ? 'fade-in' : ''}`}>30 квітня о 10:00</p>
        </div>
      </div>
      <img className="hero__down" src={arrow} alt="arrow down" loading="lazy" />
    </section>
  );
}

export default HeroSection;
