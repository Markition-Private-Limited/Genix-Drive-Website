import flow7screen2Img from '../../../assets/demo/flow7screen2.png';
import flow7popup1Img from '../../../assets/demo/flow7popup1.png';
import PopupScreenImage from './PopupScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow7Screen3Image({ onNext }) {
  return (
    <PopupScreenImage bgSrc={flow7screen2Img} popupSrc={flow7popup1Img} position="center">
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '69.2%', left: '3.5%', width: '92.8%', height: '13.8%', borderRadius: '8px', zIndex: 20 }}
        onClick={onNext}
      />
    </PopupScreenImage>
  );
}

export default flow7Screen3Image;
