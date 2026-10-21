import flow1screen2Img from '../../../assets/demo/flow1screen2.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen2Image({ onNext, onJumpTo }) {
  return (
    <BaseScreenImage src={flow1screen2Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '1.8%', left: '62.2%', width: '32.3%', height: '3%', borderRadius: '8px' }}
        onClick={onNext}
      />
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '5.8%', left: '4.8%', width: '18.9%', height: '5.7%', borderRadius: '8px' }}
        onClick={() => onJumpTo && onJumpTo(45)}
      />
    </BaseScreenImage>
  );
}

export default flow1Screen2Image;
