import flow1screen6Img from '../../../assets/demo/flow1screen6.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen6fImage({ onNext }) {
  return (
    <BaseScreenImage src={flow1screen6Img} scrollTop={520}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '52.2%', left: '2.1%', width: '93.1%', height: '20.1%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow1Screen6fImage;
