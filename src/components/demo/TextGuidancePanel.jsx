import './TextGuidancePanel.css'

function TextGuidancePanel({
  title,
  instruction,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  flowName,
  isFlowEnd,
  onNextFlow,
  globalStep,
}) {
  const isFirst = globalStep === 0

  return (
    <div className="text-guidance-panel">

      {/* Progress Dots */}
      <div className="guidance-header">
        <div className="guidance-header-top">
          <div className="progress-dots">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <span
                key={i}
                className={`progress-dot ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'completed' : ''}`}
              />
            ))}
          </div>
          {flowName && (
            <span className="flow-name-badge">{flowName}</span>
          )}
        </div>
        <div className="guidance-divider" />
      </div>

      {/* Content */}
      <div className="guidance-content">
        {title && <h2 className="guidance-title">{title}</h2>}
        <div className="guidance-instruction">
          {instruction}
        </div>
      </div>

      {/* Actions */}
      <div className="guidance-actions">
        <button
          className="nav-btn prev-btn"
          onClick={onPrevious}
          disabled={isFirst}
          aria-label="Previous step"
        >
          ← Back
        </button>

        {isFlowEnd ? (
          <button
            className="nav-btn next-flow-btn"
            onClick={onNextFlow}
            aria-label="Next flow"
          >
            Next Flow →
          </button>
        ) : flowName === 'Finish' ? (
          <button
            className="nav-btn next-btn"
            onClick={() => window.location.href = "/admin/signup"}
            aria-label="Sign Up"
          >
            Sign Up
          </button>
        ) : (
          <button
            className="nav-btn next-btn"
            onClick={onNext}
            disabled={false}
            aria-label="Next step"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  )
}

export default TextGuidancePanel
