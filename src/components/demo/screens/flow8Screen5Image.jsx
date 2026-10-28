import flow8screen4Img from '../../../assets/demo/flow8screen4.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow8Screen5Image({ onNext }) {
  return (
    <BaseScreenImage src={flow8screen4Img}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '92.3%', left: '4.5%', width: '91.4%', height: '5.6%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow8Screen5Image;
