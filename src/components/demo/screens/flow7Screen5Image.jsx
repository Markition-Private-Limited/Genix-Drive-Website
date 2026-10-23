import flow7screen1Img from '../../../assets/demo/flow7screen1.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow7Screen5Image({ onNext }) {
  return (
    <BaseScreenImage src={flow7screen1Img} scrollTop="bottom">
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '84.6%', left: '50.5%', width: '43.6%', height: '3.7%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow7Screen5Image;
