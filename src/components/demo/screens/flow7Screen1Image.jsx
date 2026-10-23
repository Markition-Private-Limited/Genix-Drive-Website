import flow7screen1Img from '../../../assets/demo/flow7screen1.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow7Screen1Image({ onNext }) {
  return (
    <BaseScreenImage src={flow7screen1Img} scrollTop="bottom">
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '84.1%', left: '5.9%', width: '44%', height: '4.9%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow7Screen1Image;
