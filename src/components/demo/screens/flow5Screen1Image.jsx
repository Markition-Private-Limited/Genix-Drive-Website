import flow5screen1Img from '../../../assets/demo/flow5screen1.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5Screen1Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage
            src={flow5screen1Img}
            scrollTop={0}
            isScrollable={false}
        >
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '6.8%', left: '3.6%', width: '15%', height: '7%', borderRadius: '50%', zIndex: 100 }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow5Screen1Image;
