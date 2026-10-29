import { useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

function PopupScreenImage({ bgSrc, popupSrc, children, position = 'bottom', popupPadding = '0px' }) {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [popupLoaded, setPopupLoaded] = useState(false);

  const isLoaded = bgLoaded && popupLoaded;

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      {!isLoaded && <LoadingSpinner />}

      {/* Background fills the full phone screen */}
      <img
        src={bgSrc}
        alt="Background"
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'top',
          display: 'block',
          opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s',
        }}
        onLoad={() => setBgLoaded(true)}
      />

      {/* Dim + blur overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0, 0, 0, 0.45)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        zIndex: 5,
        opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s',
      }} />

      {/* Popup — bottom-anchored or vertically centered */}
      <div style={{
        position: 'absolute',
        ...(position === 'center'
          ? { top: '50%', left: popupPadding, right: popupPadding, transform: 'translateY(-50%)' }
          : { bottom: 0, left: popupPadding, right: popupPadding }),
        zIndex: 10,
        opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s',
      }}>
        <div style={{ position: 'relative' }}>
          <img
            src={popupSrc}
            alt="Popup"
            style={{ width: '100%', display: 'block' }}
            onLoad={() => setPopupLoaded(true)}
          />
          {isLoaded && children}
        </div>
      </div>
    </div>
  );
}

export default PopupScreenImage;
