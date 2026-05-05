import flow1screen10Img from '../../../assets/demo/flow1screen10.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen10Image({ onNext, currentStep }) {
  const isStep10 = currentStep === 9;

  return (
    <BaseScreenImage src={flow1screen10Img} scrollTop={0}>
      {isStep10 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '5.5%', left: '3%', width: '12%', height: '6%', borderRadius: '50%' }}
          onClick={onNext}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow1Screen10Image;
