import { useState, useEffect, useRef } from 'react'
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
  showDownloadBtn,
  allFlows = [],
  onFlowChange
}) {
  const isFirst = globalStep === 0
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
          {flowName && allFlows.length > 0 ? (
            <div className="custom-flow-dropdown" ref={dropdownRef}>
              <button 
                className="flow-selector-trigger"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
              >
                {flowName}
                <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
              </button>
              
              {isDropdownOpen && (
                <ul className="flow-dropdown-list">
                  {allFlows.map(flow => (
                    <li 
                      key={flow} 
                      className={`flow-dropdown-item ${flow === flowName ? 'active' : ''}`}
                      onClick={() => {
                        onFlowChange(flow)
                        setIsDropdownOpen(false)
                      }}
                    >
                      {flow}
                      {flow === flowName && (
                        <span className="active-check">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : flowName && (
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
        {showDownloadBtn && (
          <div className="guidance-download-container">
            <button
              className="interactive-download-btn"
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.GenixDrive&hl=en", "_blank")}
            >
              DOWNLOAD APP
            </button>
          </div>
        )}

        <div className="nav-buttons-group">
          <button
            className="nav-btn prev-btn"
            onClick={onPrevious}
            disabled={isFirst}
            aria-label="Previous step"
          >
            ← <span className="btn-text">Back</span>
          </button>

          {isFlowEnd ? (
            <button
              className="nav-btn next-flow-btn"
              onClick={onNextFlow}
              aria-label="Next flow"
            >
              <span className="btn-text">Next</span> →
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
              <span className="btn-text">Next</span> →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TextGuidancePanel
