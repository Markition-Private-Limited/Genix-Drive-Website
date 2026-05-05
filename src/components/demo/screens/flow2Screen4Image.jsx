import flow2screen4Img from '../../../assets/demo/flow2screen4.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow2Screen4Image({ onNext, currentStep }) {
  return (
    <BaseScreenImage src={flow2screen4Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '60.8%', left: '51%', width: '41%', height: '13.4%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow2Screen4Image;
