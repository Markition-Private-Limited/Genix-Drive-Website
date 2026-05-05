import flow2screen6Img from '../../../assets/demo/flow2screen6.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow2Screen6Image({ onNext, currentStep }) {
  return (
    <BaseScreenImage src={flow2screen6Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '61.9%', left: '15%', width: '70%', height: '6.85%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow2Screen6Image;
