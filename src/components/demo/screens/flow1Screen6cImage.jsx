import flow1screen6cImg from '../../../assets/demo/flow1screen6c.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen6cImage({ onNext }) {
  return (
    <BaseScreenImage src={flow1screen6cImg} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '0.4%', left: '5.9%', width: '11%', height: '6.1%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow1Screen6cImage;
