import flow4screendashImg from '../../../assets/demo/flow4screendash.png';
import BaseScreenImage from './BaseScreenImage';

function flow5ScreenMeetNav({ onNext }) {
  return (
    <BaseScreenImage src={flow4screendashImg} scrollTop={0} navbarHotspotLabel="Meet" navbarHotspotOnClick={onNext}>
      {/* Hotspot is the Meet navbar tab — highlighted via navbarHotspotLabel */}
    </BaseScreenImage>
  );
}

export default flow5ScreenMeetNav;
