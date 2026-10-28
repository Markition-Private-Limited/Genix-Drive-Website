import flow8screen2Img from '../../../assets/demo/flow8screen2.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow8Screen3Image({ onNext }) {
  return (
    <BaseScreenImage src={flow8screen2Img}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '34.9%', left: '5.2%', width: '92.1%', height: '4.3%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow8Screen3Image;
