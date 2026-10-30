import flow8screen4Img from '../../../assets/demo/flow8screen4.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow8Screen5Image({ onNext }) {
  return (
    <BaseScreenImage src={flow8screen4Img}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '92.7%', left: '5.7%', width: '89%', height: '4.8%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow8Screen5Image;
