import flow1screen2Img from '../../../assets/demo/flow1screen2.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen2Image({ onNext, currentStep }) {
  const isSecondScreen = currentStep === 1;

  return (
    <BaseScreenImage src={flow1screen2Img} scrollTop={0}>
      {isSecondScreen && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '17%', left: '63%', width: '31.6%', height: '5%', borderRadius: '8px' }}
          onClick={onNext}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow1Screen2Image;
