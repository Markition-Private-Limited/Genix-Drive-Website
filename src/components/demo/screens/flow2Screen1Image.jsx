import flow2screen1Img from '../../../assets/demo/flow2screen1.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow2Screen1Image({ onNext, currentStep }) {
  const isFirstStep = currentStep === 10; // id 11 is at index 10

  return (
    <BaseScreenImage src={flow2screen1Img} scrollTop={0}>
      {isFirstStep && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '60%', left: '8%', width: '41%', height: '13.5%', borderRadius: '8px' }}
          onClick={onNext}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow2Screen1Image;
