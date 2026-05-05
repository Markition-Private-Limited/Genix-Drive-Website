import flow5screen4Img from '../../../assets/demo/flow5screen4.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5Screen4Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow5screen4Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '22%', left: '63.5%', width: '31%', height: '5%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow5Screen4Image;
