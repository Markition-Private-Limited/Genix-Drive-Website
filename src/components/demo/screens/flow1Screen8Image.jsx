import flow1screen8Img from '../../../assets/demo/flow1screen8.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen8Image({ onNext, currentStep }) {
  const isStep8 = currentStep === 7;

  return (
    <BaseScreenImage src={flow1screen8Img} scrollTop={0}>
      {isStep8 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '16.5%', left: '5%', width: '11.9%', height: '5.4%', borderRadius: '12%' }}
          onClick={onNext}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow1Screen8Image;
