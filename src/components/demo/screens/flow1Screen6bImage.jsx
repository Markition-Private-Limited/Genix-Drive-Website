import flow1screen6bImg from '../../../assets/demo/flow1screen6b.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen6bImage({ onNext }) {
  return (
    <BaseScreenImage src={flow1screen6bImg} scrollTop={280}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '2.4%', left: '5.9%', width: '11.3%', height: '6.3%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow1Screen6bImage;
