import flow8screen1Img from '../../../assets/demo/flow8screen1.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow8Screen1Image({ onNext }) {
  return (
    <BaseScreenImage src={flow8screen1Img}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '51.5%', left: '48.5%', width: '46.7%', height: '4.3%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow8Screen1Image;
