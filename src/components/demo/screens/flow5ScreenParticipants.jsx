import flow5screenparticipantsImg from '../../../assets/demo/flow5screenparticipants.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5ScreenParticipants({ onNext }) {
  return (
    <BaseScreenImage src={flow5screenparticipantsImg} scrollTop={0}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '33.7%', left: '64.3%', width: '27.9%', height: '3.7%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow5ScreenParticipants;
