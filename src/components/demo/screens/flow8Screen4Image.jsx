import flow8screen3Img from '../../../assets/demo/flow8screen3.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow8Screen4Image({ onNext }) {
  return (
    <BaseScreenImage src={flow8screen3Img}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '48.9%', left: '4.8%', width: '90.4%', height: '7.8%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow8Screen4Image;
