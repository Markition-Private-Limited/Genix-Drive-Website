import flow1screen6Img from '../../../assets/demo/flow1screen6.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen6dImage({ onNext }) {
  return (
    <BaseScreenImage src={flow1screen6Img} scrollTop="bottom">
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '72%', left: '3.8%', width: '93.8%', height: '27.2%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow1Screen6dImage;
