import flow4screentripdetails2Img from '../../../assets/demo/flow4screentripdetails2.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow4ScreenTripDetails2({ onNext }) {
  return (
    <BaseScreenImage src={flow4screentripdetails2Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '0.5%', left: '4.5%', width: '12.4%', height: '3.5%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow4ScreenTripDetails2;
