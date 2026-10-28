import flow5screenchatImg from '../../../assets/demo/flow5screenchat.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5ScreenChat({ onNext }) {
  return (
    <BaseScreenImage src={flow5screenchatImg} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '8.4%', left: '34.1%', width: '30.9%', height: '4.1%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow5ScreenChat;
