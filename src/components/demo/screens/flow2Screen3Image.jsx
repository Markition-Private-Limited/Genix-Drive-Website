import flow2screen3Img from '../../../assets/demo/flow2screen3.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow2Screen3Image({ onNext, currentStep }) {
  return (
    <BaseScreenImage src={flow2screen3Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '51%', left: '15%', width: '70%', height: '6.5%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow2Screen3Image;
