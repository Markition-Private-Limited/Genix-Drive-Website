import { useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

function PopupScreenImage({ bgSrc, popupSrc, children }) {
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

      {/* Popup anchored to the bottom — fills almost the full phone height naturally */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
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
