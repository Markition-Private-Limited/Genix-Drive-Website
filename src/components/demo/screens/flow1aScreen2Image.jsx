import { useState } from 'react';
import markTripsImg from '../../../assets/demo/flow1ascreen1.png';
import notByMeNotifImg from '../../../assets/demo/notif-not-by-me.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';
import styles from './flow1aScreen1Image.module.css';

function flow1aScreen2Image({ onNext }) {
  const [notif, setNotif] = useState(false);
  const [exiting, setExiting] = useState(false);

  const handleClick = () => {
    if (notif) return;
    setNotif(true);
    setExiting(false);
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setNotif(false);
        setExiting(false);
        onNext();
      }, 450);
    }, 1800);
  };

  return (
    <BaseScreenImage src={markTripsImg} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '84%', left: '12.1%', width: '76.3%', height: '8.6%', borderRadius: '8px' }}
        onClick={handleClick}
      />
      {notif && (
        <img
          src={notByMeNotifImg}
          className={`${styles.notifBanner} ${exiting ? styles.notifExit : styles.notifEnter}`}
          alt="notification"
          draggable={false}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow1aScreen2Image;
