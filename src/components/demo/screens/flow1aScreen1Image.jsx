import flow1ascreen1Img from '../../../assets/demo/flow1ascreen1.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1aScreen1Image({ onNext }) {
  return (
    <BaseScreenImage src={flow1ascreen1Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '77.25%', left: '11.5%', width: '77%', height: '6%', borderRadius: '10px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow1aScreen1Image;
