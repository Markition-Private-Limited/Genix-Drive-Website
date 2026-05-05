import { useRef } from 'react';
import flow1screen4Img from '../../../assets/demo/flow1screen4.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen4Image({ onNext, currentStep }) {
  const baseScreenRef = useRef(null);
  const isStep4 = currentStep === 3;
  const isStep5 = currentStep === 4;
  const isStep7 = currentStep === 6;
  const isStep9 = currentStep === 8;

  const isBottomStep = isStep5 || isStep7 || isStep9;
  const scrollTop = isBottomStep ? 'bottom' : 0;

  return (
    <BaseScreenImage src={flow1screen4Img} scrollTop={scrollTop}>
      {isStep4 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '31%', left: '6%', width: '88%', height: '37%', borderRadius: '8px' }}
          onClick={onNext}
        />
      )}

      {isStep5 && (
        <button
          type="button"
          className={baseStyles.hotspotBase}
          style={{ top: '81.5%', left: '6.5%', width: '42.5%', height: '18%', borderRadius: '12px' }}
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
