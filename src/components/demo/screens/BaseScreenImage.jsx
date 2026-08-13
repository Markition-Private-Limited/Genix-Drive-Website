import { useState, useRef, useEffect, forwardRef, useImperativeHandle, useContext } from 'react';
import topHeaderImg from '../../../assets/demo/top-header.png';
import bottomNavbarImg from '../../../assets/demo/bottom-navbar.webp';
import styles from './BaseScreenImage.module.css';
import LoadingSpinner from '../LoadingSpinner';
import { DemoContext } from '../DemoContext';

const BaseScreenImage = forwardRef(({ src, alt = "Screen", children, className = '', scrollTop = 0, isScrollable = true }, ref) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { onFlowChange } = useContext(DemoContext);

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

      <div className={`${styles.navbarContainer} ${isLoaded ? styles.elementsVisible : ''}`}>
        <img
          src={bottomNavbarImg}
          className={styles.screenNavbar}
          alt="Navbar"
        />
        <div className={styles.navbarHotspots}>
          <button
            type="button"
            className={styles.navbarHotspotButton}
            title="Dashboard"
            onClick={() => onFlowChange('Dashboard')}
          />
          <button
            type="button"
            className={styles.navbarHotspotButton}
            title="Companion"
            onClick={() => onFlowChange('Add a Connection')}
          />
          <button
            type="button"
            className={styles.navbarHotspotButton}
            title="Rewards"
            onClick={() => onFlowChange('Rewards')}
          />
          <button
            type="button"
            className={styles.navbarHotspotButton}
            title="Trip"
            onClick={() => onFlowChange('Trips')}
          />
        </div>
      </div>
    </div>
  );
});

BaseScreenImage.displayName = 'BaseScreenImage';

export default BaseScreenImage;
