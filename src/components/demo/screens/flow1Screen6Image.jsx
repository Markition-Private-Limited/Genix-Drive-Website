import flow1screen6Img from '../../../assets/demo/flow1screen6.png';
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
          style={{ top: '7.6%', left: '5.5%', width: '91.4%', height: '25%', borderRadius: '8px' }}
          onClick={onNext}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow1Screen6Image;
