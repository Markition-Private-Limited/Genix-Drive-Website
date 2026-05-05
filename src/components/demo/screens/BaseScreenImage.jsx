import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import topHeaderImg from '../../../assets/demo/top-header.webp';
import bottomNavbarImg from '../../../assets/demo/bottom-navbar.webp';
import styles from './BaseScreenImage.module.css';
import LoadingSpinner from '../LoadingSpinner';

const BaseScreenImage = forwardRef(({ src, alt = "Screen", children, className = '', scrollTop = 0, isScrollable = true }, ref) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useImperativeHandle(ref, () => ({
    scrollToTop: () => {
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
    },
    scrollToBottom: () => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    },
    get scrollContainer() {
      return containerRef.current;
    }
  }));

  useEffect(() => {
    if (isLoaded && containerRef.current) {
      if (typeof scrollTop === 'number') {
        containerRef.current.scrollTop = scrollTop;
      } else if (scrollTop === 'bottom') {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }
  }, [isLoaded, scrollTop]);

  return (
    <div ref={containerRef} className={`${styles.screenImageWrapper} ${!isScrollable ? styles.noScroll : ''} ${className}`}>
      {!isLoaded && <LoadingSpinner />}

      <img
        src={topHeaderImg}
        className={`${styles.screenHeader} ${isLoaded ? styles.elementsVisible : ''}`}
        alt="Header"
      />

      <img
        src={src}
        alt={alt}
        className={`${styles.screenImage} ${isLoaded ? styles.imageVisible : ''}`}
        onLoad={() => setIsLoaded(true)}
      />

      {isLoaded && children}

      <img
        src={bottomNavbarImg}
        className={`${styles.screenNavbar} ${isLoaded ? styles.elementsVisible : ''}`}
        alt="Navbar"
      />
    </div>
  );
});

BaseScreenImage.displayName = 'BaseScreenImage';

export default BaseScreenImage;
