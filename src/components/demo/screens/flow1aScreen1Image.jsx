import { useState } from 'react';
import markTripsImg from '../../../assets/demo/flow1ascreen1.png';
import byMeNotifImg from '../../../assets/demo/notif-by-me.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';
import styles from './flow1aScreen1Image.module.css';

function flow1aScreen1Image({ onNext }) {
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
        style={{ top: '76.5%', left: '12.7%', width: '75.3%', height: '6.5%', borderRadius: '8px' }}
        onClick={handleClick}
      />
      {notif && (
        <img
          src={byMeNotifImg}
          className={`${styles.notifBanner} ${exiting ? styles.notifExit : styles.notifEnter}`}
          alt="notification"
          draggable={false}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow1aScreen1Image;
