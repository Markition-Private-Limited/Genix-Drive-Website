import flow8screen1Img from '../../../assets/demo/flow8screen1.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow8Screen1ScrolledImage({ onNext }) {
  return (
    <BaseScreenImage src={flow8screen1Img} scrollTop="bottom">
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '73.2%', left: '6.2%', width: '89.3%', height: '5.4%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow8Screen1ScrolledImage;
