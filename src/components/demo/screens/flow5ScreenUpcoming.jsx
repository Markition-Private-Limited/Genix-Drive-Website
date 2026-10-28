import flow5screenupcomingImg from '../../../assets/demo/flow5screenupcoming.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5ScreenUpcoming({ onNext }) {
  return (
    <BaseScreenImage src={flow5screenupcomingImg} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '22.1%', left: '34.7%', width: '32.6%', height: '5.4%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow5ScreenUpcoming;
