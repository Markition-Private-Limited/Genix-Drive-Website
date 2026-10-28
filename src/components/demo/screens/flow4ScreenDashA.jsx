import flow4screendashImg from '../../../assets/demo/flow4screendash.png';
import BaseScreenImage from './BaseScreenImage';

function flow4ScreenDashA({ onNext }) {
  return (
    <BaseScreenImage src={flow4screendashImg} scrollTop={0}>
      {/* No hotspot — user reads and advances via Next button */}
    </BaseScreenImage>
  );
}

export default flow4ScreenDashA;
