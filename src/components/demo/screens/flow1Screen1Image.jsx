import flow1screen1Img from '../../../assets/demo/flow1screen1.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen1Image({ onNext, currentStep }) {
  const isFirstScreen = currentStep === 0;

  return (
    <BaseScreenImage src={flow1screen1Img} scrollTop={0}>
      {isFirstScreen && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '17%', left: '33%', width: '34%', height: '5%', borderRadius: '8px' }}
          onClick={onNext}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow1Screen1Image;
