import { useState, useEffect, useContext } from 'react';
import styles from './RewardsScreen.module.css';
import { DemoContext } from '../DemoContext';
import rewardsHeaderImg from '../../../assets/demo/rewards-header.png';
import rewardFoodImg from '../../../assets/demo/reward-food.png';
import bottomNavbarImg from '../../../assets/demo/bottom-navbar.webp';

const availableRewards = [
  { id: 1, cost: 100, title: 'Reward 1', subtitle: 'Get 25% off' },
  { id: 2, cost: 100, title: 'Reward 1', subtitle: 'Get 25% off' },
];

const redeemedRewards = [
  { id: 1, cost: 100, title: 'Reward 1', subtitle: 'Used on 12 Aug' },
];

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 110-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 110 5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

const modalText = {
  points: "Earn points by completing trips with a good driving score and participating in challenges. Every trip you complete and every challenge you accomplish adds points to your wallet, which can be used to redeem exciting vouchers and rewards.",
  voucher: "Redeem this voucher by spending 500 points. Don't have enough points yet? Complete challenges and safe trips to earn more before the voucher expires.",
};

function RewardsScreen({ initialTab = 'available', initialModal = null }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [activeModal, setActiveModal] = useState(initialModal);
  const { onFlowChange } = useContext(DemoContext);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    setActiveModal(initialModal);
  }, [initialModal]);

  const rewards = activeTab === 'available' ? availableRewards : redeemedRewards;

  const blur = (section) => {
    if (!activeModal) return '';
    if (section === 'promo' && activeModal === 'points') return '';
    return styles.blurred;
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <img src={rewardsHeaderImg} alt="" className={styles.headerImg} />

        <div className={`${styles.promo} ${blur('promo')}`}>
          <div>
            <p className={styles.promoTitle}>Drive smart, earn points!</p>
            <p className={styles.promoText}>
              Complete safe trips and finish challenges to earn more rewards. <a href="#">More Challenges</a>
            </p>
          </div>
          <button type="button" className={styles.infoCircle} onClick={() => setActiveModal('points')}>i</button>
        </div>

        <div className={`${styles.pointsCard} ${blur('pointsCard')}`}>
          <div className={styles.pointsLeft}>
            <span className={styles.pointsAvailable}>2000 Available</span>
            <span className={styles.pointsExpired}><ClockIcon /> 600 expired</span>
          </div>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>

        <div className={`${styles.toggle} ${blur('toggle')}`}>
          <button
            type="button"
            className={`${styles.toggleBtn} ${activeTab === 'available' ? styles.toggleBtnActive : ''}`}
            onClick={() => setActiveTab('available')}
          >
            Available
          </button>
          <button
            type="button"
            className={`${styles.toggleBtn} ${activeTab === 'redeemed' ? styles.toggleBtnActive : ''}`}
            onClick={() => setActiveTab('redeemed')}
          >
            Redeemed
          </button>
        </div>

        <div className={styles.list}>
          {rewards.map((reward, index) => {
            const isVoucherSource = activeModal === 'voucher' && index === 0;
            return (
              <div className={`${styles.card} ${!isVoucherSource ? blur('card') : ''}`} key={`${activeTab}-${reward.id}`}>
                <div className={styles.imageBox}>
                  <span className={styles.costBadge}><GiftIcon /> {reward.cost}</span>
                  {activeTab === 'redeemed' ? (
                    <span className={styles.redeemedBadge}>Redeemed</span>
                  ) : (
                    <button type="button" className={`${styles.infoCircle} ${styles.cardInfoCircle}`} onClick={() => setActiveModal('voucher')}>i</button>
                  )}
                  <img src={rewardFoodImg} alt="Reward" />
                </div>
                <p className={styles.cardTitle}>{reward.title}</p>
                <p className={styles.cardSubtitle}>{reward.subtitle}</p>
              </div>
            );
          })}
        </div>

        <div className={`${styles.navbarContainer} ${blur('navbar')}`}>
          <img src={bottomNavbarImg} className={styles.navbarImg} alt="Navbar" />
          <div className={styles.navbarHotspots}>
            <button type="button" className={styles.navbarHotspotButton} title="Dashboard" onClick={() => onFlowChange('Dashboard')} />
            <button type="button" className={styles.navbarHotspotButton} title="Companion" onClick={() => onFlowChange('Add a Connection')} />
            <button type="button" className={styles.navbarHotspotButton} title="Rewards" onClick={() => onFlowChange('Rewards')} />
            <button type="button" className={styles.navbarHotspotButton} title="Trip" onClick={() => onFlowChange('Trips')} />
          </div>
        </div>
      </div>

      {activeModal && (
        <div className={styles.modalOverlay}>
          <div className={`${styles.modalCard} ${activeModal === 'points' ? styles.modalCardPoints : styles.modalCardVoucher}`}>
            <p className={styles.modalText}>{modalText[activeModal]}</p>
            <button type="button" className={styles.modalCloseBtn} onClick={() => setActiveModal(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export function RewardsAvailableScreen() {
  return <RewardsScreen initialTab="available" />;
}

export function RewardsRedeemedScreen() {
  return <RewardsScreen initialTab="redeemed" />;
}

export function RewardsPointsInfoScreen() {
  return <RewardsScreen initialTab="available" initialModal="points" />;
}

export function RewardsVoucherInfoScreen() {
  return <RewardsScreen initialTab="available" initialModal="voucher" />;
}

export default RewardsScreen;
