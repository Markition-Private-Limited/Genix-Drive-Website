import flow2screen5Img from '../../../assets/demo/flow2screen5.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow2Screen5Image({ onNext, currentStep }) {
  return (
    <BaseScreenImage src={flow2screen5Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '14.2%', left: '5%', width: '90%', height: '6.2%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow2Screen5Image;
