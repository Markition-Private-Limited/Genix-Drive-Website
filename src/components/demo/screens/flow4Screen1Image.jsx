import flow4screen1Img from '../../../assets/demo/flow4screen1.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow4Screen1Image({ onNext, currentStep }) {
  const isStep25 = currentStep === 24;
  const isStep27 = currentStep === 26;

  return (
    <BaseScreenImage src={flow4screen1Img} scrollTop="bottom">
      {isStep25 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '90%', left: '6.2%', width: '75.6%', height: '41.2%', borderRadius: '8px' }}
          onClick={onNext}
        />
      )}

      {isStep27 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '84.2%', left: '65%', width: '31%', height: '4%', borderRadius: '8px' }}
          onClick={onNext}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow4Screen1Image;
