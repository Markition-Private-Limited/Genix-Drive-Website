import flow4screentriplogImg from '../../../assets/demo/flow4screentriplog.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow4ScreenTripLog({ onNext }) {
  return (
    <BaseScreenImage src={flow4screentriplogImg} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '21.5%', left: '0.7%', width: '97.6%', height: '12.9%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow4ScreenTripLog;
