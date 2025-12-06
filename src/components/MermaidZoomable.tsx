import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';


export default function MermaidZoomable({ chart }: { chart: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [origin, setOrigin] = useState({ x: 0, y: 0 });

    // Render Mermaid SVG
    useEffect(() => {
        mermaid.initialize({ startOnLoad: false });

        if (svgRef.current) {
            svgRef.current.innerHTML = '';
            mermaid.render('mermaid-zoomable', chart).then((res) => {
                svgRef.current!.innerHTML = res.svg;
            });
        }
    }, [chart]);

    // Auto-center after SVG is rendered
    useEffect(() => {
        if (!svgRef.current || !containerRef.current) return;

        // Let browser finish layout first
        requestAnimationFrame(() => {
            const svgElement = svgRef.current!.querySelector("svg");
            if (!svgElement) return;

            const svgRect = svgElement.getBoundingClientRect();
            const containerRect = containerRef.current!.getBoundingClientRect();

            if (svgRect.width === 0 || svgRect.height === 0) return;

            const centerX = (containerRect.width - svgRect.width) / 2;
            const centerY = (containerRect.height - svgRect.height) / 2;

            setPos({ x: centerX, y: centerY });
        });
    }, [chart]);

    // Dragging
    const onMouseDown = (e: React.MouseEvent) => {
        setDragging(true);
        setOrigin({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (dragging) {
            setPos({ x: e.clientX - origin.x, y: e.clientY - origin.y });
        }
    };

    const onMouseUp = () => setDragging(false);

    // Zoom
    const updateScale = (newScale: number) => {
        setScale(Math.min(Math.max(0.2, newScale), 3));
    };

    const onWheel = (e: React.WheelEvent) => {
        const delta = -e.deltaY * 0.001;
        updateScale(scale + delta);
    };

    const zoomIn = () => updateScale(scale + 0.1);
    const zoomOut = () => updateScale(scale - 0.1);
    const resetView = () => {
        setScale(1);

        // Reset and re-center
        if (svgRef.current && containerRef.current) {
            const svg = svgRef.current.querySelector("svg");
            if (!svg) return;

            const svgRect = svg.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();

            setPos({
                x: (containerRect.width - svgRect.width) / 2,
                y: (containerRect.height - svgRect.height) / 2,
            });
        }
    };

    const handleZoomSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        updateScale(parseFloat(e.target.value));
    };

    // --------------------
    // GitHub-like UI Styles
    // --------------------

    const buttonStyle: React.CSSProperties = {
        padding: '4px 10px',
        borderRadius: '6px',
        border: '1px solid var(--ifm-color-emphasis-300)',
        background: 'var(--ifm-background-surface-color)',
        color: 'var(--ifm-font-color-base)',
        cursor: 'pointer',
        fontSize: '0.85rem',
        transition: 'all 0.12s ease',
    };

    const hoverStyle = {
        background: 'var(--ifm-color-emphasis-100)',
    };

    const selectStyle: React.CSSProperties = {
        padding: '4px 6px',
        borderRadius: '6px',
        border: '1px solid var(--ifm-color-emphasis-300)',
        background: 'var(--ifm-background-surface-color)',
        color: 'var(--ifm-font-color-base)',
        fontSize: '0.85rem',
        height: '28px',
    };

    return (
        <div style={{ position: 'relative' }}>

            {/* Controls */}
            <div
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '10px',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'var(--ifm-background-surface-color)',
                    padding: '8px',
                    borderRadius: '8px',
                    border: '1px solid var(--ifm-color-emphasis-200)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                }}
            >
                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
                    onClick={zoomIn}
                >
                    ＋
                </button>

                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
                    onClick={zoomOut}
                >
                    －
                </button>

                <select style={selectStyle} value={scale} onChange={handleZoomSelect}>
                    <option value={0.5}>50%</option>
                    <option value={0.75}>75%</option>
                    <option value={1}>100%</option>
                    <option value={1.5}>150%</option>
                    <option value={2}>200%</option>
                    <option value={3}>300%</option>
                </select>

                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
                    onClick={resetView}
                >
                    Reset
                </button>
            </div>

            {/* Diagram */}
            <div
                ref={containerRef}
                style={{
                    width: '100%',
                    height: '600px',
                    border: '1px solid var(--ifm-color-emphasis-200)',
                    overflow: 'hidden',
                    background: 'var(--ifm-background-surface-color)',
                    cursor: dragging ? 'grabbing' : 'grab',
                }}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onWheel={onWheel}
            >
                <div
                    ref={svgRef}
                    style={{
                        transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                        transformOrigin: '0 0',
                        transition: dragging ? 'none' : 'transform 0.05s linear',
                        userSelect: 'none',
                    }}
                />
            </div>
        </div>
    );
}
