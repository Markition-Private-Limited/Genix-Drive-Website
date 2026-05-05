import flow3screen1Img from '../../../assets/demo/flow3screen1.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow3Screen1Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage
            src={flow3screen1Img}
            scrollTop={0}
            isScrollable={false}
        >
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '7.3%', left: '5%', width: '12.3%', height: '6%', borderRadius: '50px', zIndex: 50 }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow3Screen1Image;
