import flow1screen1Img from '../../../assets/demo/flow1screen1.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow1Screen1Image({ onNext, onJumpTo }) {
  return (
    <BaseScreenImage src={flow1screen1Img} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '2.6%', left: '35.8%', width: '29.6%', height: '3.1%', borderRadius: '8px' }}
        onClick={onNext}
      />
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '6.5%', left: '5.2%', width: '17.2%', height: '5.8%', borderRadius: '8px' }}
        onClick={() => onJumpTo && onJumpTo(45)}
      />
    </BaseScreenImage>
  );
}

export default flow1Screen1Image;
