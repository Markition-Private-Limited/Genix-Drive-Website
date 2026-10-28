import flow5screenmapImg from '../../../assets/demo/flow5screenmap.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5ScreenMap({ onNext }) {
  return (
    <BaseScreenImage src={flow5screenmapImg} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '2.5%', left: '66%', width: '27.1%', height: '3.4%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow5ScreenMap;
