import flow5screen5Img from '../../../assets/demo/flow5screen5.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow5Screen5Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow5screen5Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '82.5%', left: '4%', width: '92%', height: '6.7%', borderRadius: '12px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow5Screen5Image;
