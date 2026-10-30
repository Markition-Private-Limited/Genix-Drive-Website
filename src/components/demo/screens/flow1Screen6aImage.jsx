import flow1screen6Img from '../../../assets/demo/flow1screen6.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen6aImage({ onNext }) {
  return (
    <BaseScreenImage src={flow1screen6Img} scrollTop={390}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '37.8%', left: '3.5%', width: '92.4%', height: '13.8%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow1Screen6aImage;
