import flow3screen6Img from '../../../assets/demo/flow3screen6.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow3Screen6Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow3screen6Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '65%', left: '16%', width: '69%', height: '6.5%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow3Screen6Image;
