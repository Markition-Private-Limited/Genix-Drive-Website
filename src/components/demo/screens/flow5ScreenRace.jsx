import flow5screenraceImg from '../../../assets/demo/flow5screenrace.png';
import BaseScreenImage from './BaseScreenImage';

function flow5ScreenRace({ onNext }) {
  return (
    <BaseScreenImage src={flow5screenraceImg} scrollTop={0}>
      {/* No hotspot — flow end */}
    </BaseScreenImage>
  );
}

export default flow5ScreenRace;
