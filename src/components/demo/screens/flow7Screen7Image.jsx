import flow7screen3Img from '../../../assets/demo/flow7screen3.png';
import flow7popup2Img from '../../../assets/demo/flow7popup2.png';
import PopupScreenImage from './PopupScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow7Screen7Image({ onNext }) {
  return (
    <PopupScreenImage bgSrc={flow7screen3Img} popupSrc={flow7popup2Img} position="center">
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '64%', left: '4.8%', width: '90.7%', height: '7.7%', borderRadius: '8px', zIndex: 20 }}
        onClick={onNext}
      />
    </PopupScreenImage>
  );
}

export default flow7Screen7Image;
