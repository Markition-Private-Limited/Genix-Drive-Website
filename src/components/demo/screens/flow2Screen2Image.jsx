import flow2screen2Img from '../../../assets/demo/flow2screen2.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow2Screen2Image({ onNext, currentStep }) {
  return (
    <BaseScreenImage src={flow2screen2Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '22%', left: '5%', width: '90%', height: '9.5%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow2Screen2Image;
