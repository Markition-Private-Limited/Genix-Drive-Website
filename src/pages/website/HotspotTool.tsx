import React, { useState, useRef, useCallback } from 'react';

export default function HotspotTool() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageName, setImageName] = useState('');
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [liveRect, setLiveRect] = useState<any>(null);
  const [hotspots, setHotspots] = useState<any[]>([]);
  const [copied, setCopied] = useState<number | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageName(file.name);
    setHotspots([]);
    const reader = new FileReader();
    reader.onload = (ev) => setImageSrc(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setImageName(file.name);
    setHotspots([]);
    const reader = new FileReader();
    reader.onload = (ev) => setImageSrc(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const getPercent = useCallback((clientX: number, clientY: number) => {
    const img = imageRef.current;
    if (!img) return null;
    const b = img.getBoundingClientRect();
    return {
      x: ((clientX - b.left) / b.width) * 100,
      y: ((clientY - b.top) / b.height) * 100,
    };
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!imageSrc) return;
    e.preventDefault();
    const pos = getPercent(e.clientX, e.clientY);
    if (!pos) return;
    setStartPos(pos);
    setLiveRect(null);
    setDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !startPos) return;
    const pos = getPercent(e.clientX, e.clientY);
    if (!pos) return;
    setLiveRect({
      top:    Math.min(startPos.y, pos.y),
      left:   Math.min(startPos.x, pos.x),
      width:  Math.abs(pos.x - startPos.x),
      height: Math.abs(pos.y - startPos.y),
    });
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!dragging || !startPos) return;
    setDragging(false);
    const pos = getPercent(e.clientX, e.clientY);
    if (!pos) return;
    const h = {
      top:    parseFloat(Math.min(startPos.y, pos.y).toFixed(1)),
      left:   parseFloat(Math.min(startPos.x, pos.x).toFixed(1)),
      width:  parseFloat(Math.abs(pos.x - startPos.x).toFixed(1)),
      height: parseFloat(Math.abs(pos.y - startPos.y).toFixed(1)),
    };
    setStartPos(null);
    setLiveRect(null);
    if (h.width < 1 || h.height < 1) return;
    setHotspots(prev => [...prev, h]);
  };

  const copyJSX = (h: any, i: number) => {
    const code = `style={{ top: '${h.top}%', left: '${h.left}%', width: '${h.width}%', height: '${h.height}%', borderRadius: '8px' }}`;
    navigator.clipboard.writeText(code);
    setCopied(i);
    setTimeout(() => setCopied(null), 1500);
  };

  const removeHotspot = (i: number) => setHotspots(prev => prev.filter((_, idx) => idx !== i));

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f1a', display: 'flex', fontFamily: 'Inter, sans-serif', color: '#fff' }}>

      {/* Left: phone frame + image */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
        <h2 style={{ marginBottom: 24, fontSize: 20, fontWeight: 700, color: '#633CFF' }}>🎯 Hotspot Tool</h2>

        {!imageSrc ? (
          <div
            onDrop={onDrop}
            onDragOver={e => e.preventDefault()}
            style={{
              width: 280, height: 420, border: '2px dashed #633CFF', borderRadius: 16,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 12, color: '#aaa', cursor: 'pointer',
            }}
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <span style={{ fontSize: 40 }}>📁</span>
            <span style={{ fontSize: 14 }}>Drop image here or click to upload</span>
            <input id="file-input" type="file" accept="image/*" style={{ display: 'none' }} onChange={onFileChange} />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 12, color: '#666' }}>{imageName}</span>

            {/* Image at its natural size — hotspot % are relative to image dimensions */}
            <div style={{ position: 'relative', userSelect: 'none' }}>
              <div
                style={{ position: 'relative', cursor: 'crosshair', lineHeight: 0 }}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
              >
                <img
                  ref={imageRef}
                  src={imageSrc}
                  alt="screen"
                  style={{ width: 291, display: 'block' }}
                  draggable={false}
                />

                {/* Existing hotspots */}
                {hotspots.map((h, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    top: `${h.top}%`, left: `${h.left}%`,
                    width: `${h.width}%`, height: `${h.height}%`,
                    border: '2px solid #633CFF',
                    background: 'rgba(99,60,255,0.2)',
                    boxSizing: 'border-box',
                  }}>
                    <span style={{
                      position: 'absolute', top: -18, left: 0,
                      background: '#633CFF', color: '#fff', fontSize: 10,
                      padding: '1px 5px', borderRadius: 4, whiteSpace: 'nowrap',
                    }}>{i + 1}</span>
                  </div>
                ))}

                {/* Live drag rect */}
                {liveRect && (
                  <div style={{
                    position: 'absolute',
                    top: `${liveRect.top}%`, left: `${liveRect.left}%`,
                    width: `${liveRect.width}%`, height: `${liveRect.height}%`,
                    border: '2px dashed #22d3ee',
                    background: 'rgba(34,211,238,0.15)',
                    boxSizing: 'border-box',
                    pointerEvents: 'none',
                  }} />
                )}
              </div>
            </div>

            <button
              onClick={() => { setImageSrc(null); setHotspots([]); }}
              style={{ background: 'transparent', border: '1px solid #444', color: '#aaa', borderRadius: 6, padding: '4px 12px', cursor: 'pointer', fontSize: 12 }}
            >
              Change image
            </button>
          </div>
        )}
      </div>

      {/* Right: results panel */}
      <div style={{ width: 320, background: '#13131f', padding: 24, overflowY: 'auto', borderLeft: '1px solid #222' }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>Hotspots</h3>
        <p style={{ fontSize: 11, color: '#666', marginBottom: 20 }}>Draw boxes on the image. Copy the style and paste into your screen component.</p>

        {hotspots.length === 0 && (
          <p style={{ fontSize: 12, color: '#444', textAlign: 'center', marginTop: 40 }}>No hotspots yet</p>
        )}

        {hotspots.map((h, i) => (
          <div key={i} style={{ background: '#0d0d1a', borderRadius: 8, padding: 12, marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#633CFF' }}>Hotspot {i + 1}</span>
              <button onClick={() => removeHotspot(i)} style={{ background: 'transparent', border: 'none', color: '#666', cursor: 'pointer', fontSize: 16, lineHeight: 1 }}>×</button>
            </div>
            <code style={{ fontSize: 11, color: '#7dd3fc', display: 'block', lineHeight: 1.8, background: '#080812', padding: 8, borderRadius: 6 }}>
              top: '{h.top}%'<br />
              left: '{h.left}%'<br />
              width: '{h.width}%'<br />
              height: '{h.height}%'
            </code>
            <button
              onClick={() => copyJSX(h, i)}
              style={{
                marginTop: 8, width: '100%', background: copied === i ? '#16a34a' : '#633CFF',
                color: '#fff', border: 'none', borderRadius: 6, padding: '6px 0',
                cursor: 'pointer', fontSize: 12, fontWeight: 600, transition: 'background 0.2s',
              }}
            >
              {copied === i ? '✓ Copied!' : 'Copy style prop'}
            </button>
          </div>
        ))}

        {hotspots.length > 0 && (
          <button
            onClick={() => setHotspots([])}
            style={{ width: '100%', background: 'transparent', border: '1px solid #333', color: '#666', borderRadius: 6, padding: '6px 0', cursor: 'pointer', fontSize: 12, marginTop: 4 }}
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
}
