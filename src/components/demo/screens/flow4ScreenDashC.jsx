import flow4screendashImg from '../../../assets/demo/flow4screendash.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow4ScreenDashC({ onNext }) {
  return (
    <BaseScreenImage src={flow4screendashImg} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '60.3%', left: '66.7%', width: '27.5%', height: '3.1%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow4ScreenDashC;
