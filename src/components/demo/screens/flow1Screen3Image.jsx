import flow1screen3Img from '../../../assets/demo/flow1screen3.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen3Image({ onNext, currentStep }) {
  const isThirdScreen = currentStep === 2;

  return (
    <BaseScreenImage src={flow1screen3Img} scrollTop={0}>
      {isThirdScreen && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '37%', left: '26%', width: '48.5%', height: '23%', borderRadius: '50%' }}
          onClick={onNext}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow1Screen3Image;
