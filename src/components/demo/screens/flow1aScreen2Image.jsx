import flow1ascreen2Img from '../../../assets/demo/flow1ascreen2.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1aScreen2Image({ onNext }) {
  return (
    <BaseScreenImage src={flow1ascreen2Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '83.9%', left: '11.5%', width: '77%', height: '6%', borderRadius: '10px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow1aScreen2Image;
