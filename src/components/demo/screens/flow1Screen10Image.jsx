import flow1screen10Img from '../../../assets/demo/flow1screen10.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen10Image({ onNext, currentStep }) {
  const isStep10 = currentStep === 9;

  return (
    <BaseScreenImage src={flow1screen10Img} scrollTop={0}>
      {/* {isStep10 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '16.5%', left: '5%', width: '11.9%', height: '5.4%', borderRadius: '12%' }}
          onClick={onNext}
        />
      )} */}
    </BaseScreenImage>
  );
}

export default flow1Screen10Image;
