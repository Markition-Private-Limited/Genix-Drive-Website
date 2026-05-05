import flow4screen2Img from '../../../assets/demo/flow4screen2.webp';
import BaseScreenImage from './BaseScreenImage';
import baseStyles from './BaseScreenImage.module.css';

function flow4Screen2Image({ onNext, currentStep }) {
    const isStep2 = currentStep === 25; // First occurrence in Flow 4 (id 26)

    return (
        <BaseScreenImage src={flow4screen2Img} scrollTop={0}>
            {isStep2 && (
                <button
                    type="button"
                    className={baseStyles.hotspotBase}
                    style={{ top: '16.1%', left: '5%', width: '12%', height: '6%', borderRadius: '8px' }}
                    onClick={onNext}
                />
            )}
        </BaseScreenImage>
    );
}

export default flow4Screen2Image;
