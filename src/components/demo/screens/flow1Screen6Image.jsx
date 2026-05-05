import flow1screen6Img from '../../../assets/demo/flow1screen6.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen6Image({ onNext, currentStep }) {
  const isStep6 = currentStep === 5;

  return (
    <BaseScreenImage src={flow1screen6Img} scrollTop={0}>
      {isStep6 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '16.5%', left: '5%', width: '12%', height: '5.4%', borderRadius: '12%' }}
          onClick={onNext}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow1Screen6Image;
