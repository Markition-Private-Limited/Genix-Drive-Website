import flow5screenmeetupdetailsImg from '../../../assets/demo/flow5screenmeetupdetails.png';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5ScreenMeetupDetails({ onNext }) {
  return (
    <BaseScreenImage src={flow5screenmeetupdetailsImg} scrollTop={240}>
      <button
        type="button"
        className={baseStyles.hotspotBase}
        style={{ top: '51.6%', left: '3.8%', width: '92.8%', height: '13.9%', borderRadius: '8px' }}
        onClick={onNext}
      />
    </BaseScreenImage>
  );
}

export default flow5ScreenMeetupDetails;
