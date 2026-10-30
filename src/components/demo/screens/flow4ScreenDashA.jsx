import flow4screendashImg from '../../../assets/demo/flow4screendash.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow4ScreenDashA({ onNext }) {
  return (
    <BaseScreenImage src={flow4screendashImg} scrollTop={350}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '64.9%', left: '6%', width: '76.3%', height: '34.4%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow4ScreenDashA;
