import flow4screentripdetails1Img from '../../../assets/demo/flow4screentripdetails1.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow4ScreenTripDetails1({ onNext }) {
  return (
    <BaseScreenImage src={flow4screentripdetails1Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '0.5%', left: '4.5%', width: '12.4%', height: '3.5%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow4ScreenTripDetails1;
