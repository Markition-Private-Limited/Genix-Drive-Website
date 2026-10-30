import flow1screen3Img from '../../../assets/demo/flow1screen3.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen3Image({ onNext }) {
  return (
    <BaseScreenImage src={flow1screen3Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '19.65%', left: '18.4%', width: '63%', height: '23.05%', borderRadius: '50%' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow1Screen3Image;
