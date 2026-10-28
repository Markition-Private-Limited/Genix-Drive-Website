import flow5screencompletedImg from '../../../assets/demo/flow5screencompleted.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5ScreenCompleted({ onNext }) {
  return (
    <BaseScreenImage src={flow5screencompletedImg} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '87%', left: '5.5%', width: '88.7%', height: '9.6%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow5ScreenCompleted;
