import flow4screen4Img from '../../../assets/demo/flow4screen4.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow4Screen4Image({ onNext, currentStep }) {
    return (
        <BaseScreenImage src={flow4screen4Img} scrollTop={0}>
            <button
                type="button"
                className={baseStyles.hotspotBase}
                style={{ top: '31.7%', left: '2.5%', width: '94%', height: '10%', borderRadius: '8px' }}
                onClick={onNext}
            />
        </BaseScreenImage>
    );
}

export default flow4Screen4Image;
