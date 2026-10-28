import flow5screeniinprogressImg from '../../../assets/demo/flow5screeniinprogress.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5ScreenInProgressB({ onNext }) {
  return (
    <BaseScreenImage src={flow5screeniinprogressImg} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '30.4%', left: '5.9%', width: '88%', height: '12.9%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow5ScreenInProgressB;
