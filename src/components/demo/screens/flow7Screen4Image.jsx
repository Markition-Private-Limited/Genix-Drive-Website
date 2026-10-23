import flow7screen2Img from '../../../assets/demo/flow7screen2.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow7Screen4Image({ onNext }) {
  return (
    <BaseScreenImage src={flow7screen2Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '2.3%', left: '5.9%', width: '10.7%', height: '3.5%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow7Screen4Image;
