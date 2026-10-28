import flow5screeniinprogressImg from '../../../assets/demo/flow5screeniinprogress.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5ScreenInProgress({ onNext }) {
  return (
    <BaseScreenImage src={flow5screeniinprogressImg} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '21.7%', left: '65.7%', width: '28.2%', height: '5.9%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow5ScreenInProgress;
