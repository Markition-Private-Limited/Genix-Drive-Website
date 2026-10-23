import flow7screen3Img from '../../../assets/demo/flow7screen3.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow7Screen6Image({ onNext }) {
  return (
    <BaseScreenImage src={flow7screen3Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '29.5%', left: '64%', width: '27.8%', height: '3.5%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow7Screen6Image;
