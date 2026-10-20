import { useState, useRef, useCallback } from 'react';

function HotspotPicker({ containerRef }) {
  const [isActive, setIsActive] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState(null);
  const [rect, setRect] = useState(null);
  const [results, setResults] = useState([]);
  const overlayRef = useRef(null);

  const getPercent = useCallback((clientX, clientY) => {
    const container = containerRef?.current;
    if (!container) return null;
    const bounds = container.getBoundingClientRect();
    return {
      x: ((clientX - bounds.left) / bounds.width) * 100,
      y: ((clientY - bounds.top) / bounds.height) * 100,
    };
  }, [containerRef]);

  const onMouseDown = useCallback((e) => {
    if (!isActive) return;
    e.preventDefault();
    const pos = getPercent(e.clientX, e.clientY);
    if (!pos) return;
    setStartPos(pos);
    setRect(null);
    setDragging(true);
  }, [isActive, getPercent]);

  const onMouseMove = useCallback((e) => {
    if (!dragging || !startPos) return;
    e.preventDefault();
    const pos = getPercent(e.clientX, e.clientY);
    if (!pos) return;
    setRect({
      top:    Math.min(startPos.y, pos.y),
      left:   Math.min(startPos.x, pos.x),
      width:  Math.abs(pos.x - startPos.x),
      height: Math.abs(pos.y - startPos.y),
    });
  }, [dragging, startPos, getPercent]);

  const onMouseUp = useCallback((e) => {
    if (!dragging || !startPos) return;
    e.preventDefault();
    setDragging(false);
    setStartPos(null);
    const pos = getPercent(e.clientX, e.clientY);
    if (!pos) return;
    const hotspot = {
      top:    parseFloat(Math.min(startPos.y, pos.y).toFixed(1)),
      left:   parseFloat(Math.min(startPos.x, pos.x).toFixed(1)),
      width:  parseFloat(Math.abs(pos.x - startPos.x).toFixed(1)),
      height: parseFloat(Math.abs(pos.y - startPos.y).toFixed(1)),
    };
    if (hotspot.width < 1 || hotspot.height < 1) return;
    setResults(prev => [...prev, hotspot]);
    setRect(null);
  }, [dragging, startPos, getPercent]);

  const copyToClipboard = (hotspot, index) => {
    const code = `<button\n  type="button"\n  className={baseStyles.hotspotBase}\n  style={{ top: '${hotspot.top}%', left: '${hotspot.left}%', width: '${hotspot.width}%', height: '${hotspot.height}%', borderRadius: '8px' }}\n  onClick={onNext}\n/>`;
    navigator.clipboard.writeText(code);
  };

  if (!isActive) {
    return (
      <button
        onClick={() => setIsActive(true)}
        style={{
          position: 'fixed', bottom: 20, right: 20, zIndex: 9999,
          background: '#633CFF', color: '#fff', border: 'none',
          borderRadius: 8, padding: '10px 16px', cursor: 'pointer',
          fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13,
          boxShadow: '0 4px 12px rgba(99,60,255,0.4)',
        }}
      >
        🎯 Hotspot Picker
      </button>
    );
  }

  return (
    <>
      {/* Invisible drag overlay on top of the phone screen */}
      <div
        ref={overlayRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        style={{
          position: 'fixed', inset: 0, zIndex: 9998,
          cursor: dragging ? 'crosshair' : 'crosshair',
        }}
      />

      {/* Live drag rectangle */}
      {rect && containerRef?.current && (() => {
        const bounds = containerRef.current.getBoundingClientRect();
        return (
          <div style={{
            position: 'fixed',
            top:    bounds.top  + (rect.top  / 100) * bounds.height,
            left:   bounds.left + (rect.left / 100) * bounds.width,
            width:  (rect.width  / 100) * bounds.width,
            height: (rect.height / 100) * bounds.height,
            border: '2px dashed #633CFF',
            background: 'rgba(99,60,255,0.15)',
            zIndex: 9999,
            pointerEvents: 'none',
          }} />
        );
      })()}

      {/* Panel */}
      <div style={{
        position: 'fixed', bottom: 20, right: 20, zIndex: 10000,
        background: '#1a1a2e', color: '#fff', borderRadius: 12,
        padding: 16, width: 340, fontFamily: 'Inter, monospace',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        maxHeight: '70vh', overflowY: 'auto',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: '#633CFF' }}>🎯 Hotspot Picker</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setResults([])} style={btnStyle('#444')}>Clear</button>
            <button onClick={() => setIsActive(false)} style={btnStyle('#633CFF')}>Done</button>
          </div>
        </div>

        <p style={{ fontSize: 11, color: '#aaa', marginBottom: 12 }}>
          Click and drag over the phone screen to define a hotspot area.
        </p>

        {results.length === 0 && (
          <p style={{ fontSize: 12, color: '#666', textAlign: 'center', padding: '16px 0' }}>
            No hotspots yet — drag to create one
          </p>
        )}

        {results.map((h, i) => (
          <div key={i} style={{ background: '#0d0d1a', borderRadius: 8, padding: 10, marginBottom: 8, fontSize: 11 }}>
            <div style={{ color: '#aaa', marginBottom: 6 }}>Hotspot {i + 1}</div>
            <code style={{ color: '#7dd3fc', display: 'block', lineHeight: 1.6 }}>
              top: '{h.top}%'<br/>
              left: '{h.left}%'<br/>
              width: '{h.width}%'<br/>
              height: '{h.height}%'
            </code>
            <button
              onClick={() => copyToClipboard(h, i)}
              style={{ ...btnStyle('#633CFF'), marginTop: 8, width: '100%' }}
            >
              Copy JSX
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

const btnStyle = (bg) => ({
  background: bg, color: '#fff', border: 'none',
  borderRadius: 6, padding: '4px 10px', cursor: 'pointer',
  fontSize: 11, fontWeight: 600,
});

export default HotspotPicker;
