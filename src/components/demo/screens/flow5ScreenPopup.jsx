import flow5screenparticipantsImg from '../../../assets/demo/flow5screenparticipants.png';
import flow5screenpopupImg from '../../../assets/demo/flow5screenpopup.png';
import BaseScreenImage from './BaseScreenImage';

function flow5ScreenPopup({ onNext }) {
  const overlay = (
    <div
      style={{
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(3px)',
        backgroundColor: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'relative', width: '88%' }}>
        <img
          src={flow5screenpopupImg}
          alt="Invite sent confirmation"
          style={{ width: '100%', display: 'block', borderRadius: '16px' }}
        />
        <button
          type="button"
          onClick={onNext}
          style={{
            position: 'absolute',
            top: '68.1%',
            left: '3.1%',
            width: '93.8%',
            height: '10.1%',
            borderRadius: '8px',
            border: '2px solid rgba(34, 197, 94, 0.9)',
            background: 'rgba(34, 197, 94, 0.15)',
            cursor: 'pointer',
          }}
        />
      </div>
    </div>
  );

  return (
    <BaseScreenImage src={flow5screenparticipantsImg} scrollTop={0} isScrollable={false} overlayContent={overlay} />
  );
}

export default flow5ScreenPopup;
