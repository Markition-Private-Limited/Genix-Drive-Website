import flow7screen2Img from '../../../assets/demo/flow7screen2.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow7Screen2Image({ onNext }) {
  return (
    <BaseScreenImage src={flow7screen2Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '29%', left: '63.6%', width: '27.8%', height: '3.2%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow7Screen2Image;
