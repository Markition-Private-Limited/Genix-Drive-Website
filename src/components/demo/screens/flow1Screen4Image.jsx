import flow1screen4Img from '../../../assets/demo/flow1screen4.png';
import flow1screen4OldImg from '../../../assets/demo/flow1screen4.webp';
import flow1screen5Img from '../../../assets/demo/flow1screen5.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen4Image({ onNext, currentStep }) {
  const isStep4 = currentStep === 3;
  const isStep5 = currentStep === 4;
  const isStep7 = currentStep === 6;
  const isStep9 = currentStep === 8;

  const isBottomStep = isStep7 || isStep9;
  const scrollTop = isBottomStep ? 'bottom' : 0;

  const src = isStep4 ? flow1screen4Img : isStep5 ? flow1screen5Img : flow1screen4OldImg;

  return (
    <BaseScreenImage src={src} scrollTop={scrollTop}>
      {isStep4 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '4.1%', left: '36.5%', width: '28.9%', height: '1.7%', borderRadius: '8px' }}
          onClick={onNext}
        />
      )}

      {isStep5 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '4.4%', left: '65%', width: '28.5%', height: '1.9%', borderRadius: '8px' }}
          onClick={onNext}
        />
      )}

      {isStep7 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '81.5%', left: '51%', width: '42.5%', height: '18%', borderRadius: '12px' }}
          onClick={onNext}
        />
      )}

      {isStep9 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '102%', left: '6%', width: '88.5%', height: '20%', borderRadius: '12px' }}
          onClick={onNext}
        />
      )}
    </BaseScreenImage>
  );
}

export default flow1Screen4Image;
