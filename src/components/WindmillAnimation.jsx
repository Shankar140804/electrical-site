import React, { useState, useEffect, useRef } from 'react';

const WindmillAnimation = () => {
    const canvasRef = useRef(null);
    const [useVideo, setUseVideo] = useState(true);

    // Canvas fallback — only runs when video fails to load
    useEffect(() => {
        if (useVideo) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;

        const turbines = [
            { x: 0.12, y: 0.72, scale: 1.1, speed: 0.008, angle: 0 },
            { x: 0.28, y: 0.78, scale: 0.85, speed: 0.006, angle: 1.2 },
            { x: 0.48, y: 0.75, scale: 1.0, speed: 0.007, angle: 0.5 },
            { x: 0.65, y: 0.80, scale: 0.75, speed: 0.009, angle: 2.1 },
            { x: 0.80, y: 0.74, scale: 1.05, speed: 0.0065, angle: 0.9 },
            { x: 0.94, y: 0.79, scale: 0.8, speed: 0.0075, angle: 1.7 },
        ];
        const clouds = [
            { x: 0.05, y: 0.12, w: 140, speed: 0.00015 },
            { x: 0.35, y: 0.08, w: 110, speed: 0.00012 },
            { x: 0.60, y: 0.15, w: 90, speed: 0.00018 },
            { x: 0.80, y: 0.10, w: 120, speed: 0.00014 },
        ];
        const birds = [
            { x: 0.2, y: 0.22, speed: 0.00025, flap: 0 },
            { x: 0.55, y: 0.18, speed: 0.00018, flap: 1.2 },
            { x: 0.75, y: 0.25, speed: 0.00030, flap: 0.6 },
        ];

        let W = 0, H = 0;
        const resize = () => {
            W = canvas.width = canvas.parentElement.clientWidth;
            H = canvas.height = canvas.parentElement.clientHeight;
        };

        const drawCloud = (cx, cy, w) => {
            const h = w * 0.38;
            ctx.fillStyle = 'rgba(255,255,255,0.55)';
            ctx.beginPath(); ctx.ellipse(cx, cy, w * 0.5, h * 0.6, 0, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(cx - w * 0.22, cy + h * 0.1, w * 0.32, h * 0.5, 0, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(cx + w * 0.22, cy + h * 0.1, w * 0.35, h * 0.52, 0, 0, Math.PI * 2); ctx.fill();
        };

        const drawBird = (bx, by, flap) => {
            const wing = Math.sin(flap) * 6;
            ctx.strokeStyle = 'rgba(70,130,180,0.7)'; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(bx - 8, by + wing); ctx.quadraticCurveTo(bx - 4, by - 3, bx, by); ctx.quadraticCurveTo(bx + 4, by - 3, bx + 8, by + wing); ctx.stroke();
        };

        const drawTurbineBlades = (cx, cy, r, angle) => {
            for (let i = 0; i < 3; i++) {
                const a = angle + (i * Math.PI * 2) / 3;
                ctx.save(); ctx.translate(cx, cy); ctx.rotate(a);
                const grad = ctx.createLinearGradient(0, 0, 0, -r);
                grad.addColorStop(0, 'rgba(255,255,255,0.95)');
                grad.addColorStop(1, 'rgba(200,220,255,0.7)');
                ctx.fillStyle = grad;
                ctx.beginPath(); ctx.moveTo(0, 0);
                ctx.bezierCurveTo(-r * 0.08, -r * 0.25, -r * 0.12, -r * 0.65, 0, -r);
                ctx.bezierCurveTo(r * 0.04, -r * 0.75, r * 0.04, -r * 0.3, 0, 0);
                ctx.fill(); ctx.restore();
            }
        };

        const drawTurbine = (t) => {
            const cx = t.x * W, base = t.y * H, s = t.scale;
            const towerH = 140 * s, bladeR = 58 * s, hubY = base - towerH;
            const towerGrad = ctx.createLinearGradient(cx - 6 * s, hubY, cx + 6 * s, hubY);
            towerGrad.addColorStop(0, 'rgba(180,200,230,0.9)');
            towerGrad.addColorStop(0.5, 'rgba(220,235,255,0.95)');
            towerGrad.addColorStop(1, 'rgba(180,200,230,0.8)');
            ctx.fillStyle = towerGrad;
            ctx.beginPath(); ctx.moveTo(cx - 6 * s, base); ctx.lineTo(cx + 6 * s, base);
            ctx.lineTo(cx + 3 * s, hubY); ctx.lineTo(cx - 3 * s, hubY); ctx.closePath(); ctx.fill();
            drawTurbineBlades(cx, hubY, bladeR, t.angle);
            ctx.fillStyle = 'rgba(230,240,255,0.98)'; ctx.strokeStyle = 'rgba(160,190,230,0.8)'; ctx.lineWidth = 1.2 * s;
            ctx.beginPath(); ctx.arc(cx, hubY, 5.5 * s, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.fillStyle = 'rgba(160,195,220,0.6)';
            ctx.beginPath(); ctx.ellipse(cx, base, 12 * s, 4 * s, 0, 0, Math.PI * 2); ctx.fill();
        };

        const drawGround = () => {
            const grad = ctx.createLinearGradient(0, H * 0.75, 0, H);
            grad.addColorStop(0, 'rgba(180,215,190,0.6)'); grad.addColorStop(1, 'rgba(140,185,160,0.4)');
            ctx.fillStyle = grad;
            ctx.beginPath(); ctx.moveTo(0, H); ctx.lineTo(0, H * 0.85);
            ctx.bezierCurveTo(W * 0.15, H * 0.82, W * 0.3, H * 0.88, W * 0.45, H * 0.83);
            ctx.bezierCurveTo(W * 0.6, H * 0.78, W * 0.75, H * 0.87, W, H * 0.85);
            ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
        };

        const animate = () => {
            ctx.clearRect(0, 0, W, H);
            turbines.forEach(t => {
                ctx.strokeStyle = 'rgba(100,160,220,0.15)'; ctx.lineWidth = 1; ctx.setLineDash([4, 8]);
                ctx.beginPath(); ctx.moveTo(t.x * W, t.y * H); ctx.lineTo(t.x * W, H); ctx.stroke(); ctx.setLineDash([]);
            });
            clouds.forEach(c => { c.x += c.speed; if (c.x > 1.2) c.x = -0.2; drawCloud(c.x * W, c.y * H, c.w); });
            drawGround();
            turbines.forEach(t => { t.angle += t.speed; drawTurbine(t); });
            birds.forEach(b => { b.x += b.speed; b.flap += 0.12; if (b.x > 1.2) b.x = -0.1; drawBird(b.x * W, b.y * H, b.flap); });
            animId = requestAnimationFrame(animate);
        };

        resize();
        animate();
        window.addEventListener('resize', resize);
        return () => { if (animId) cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
    }, [useVideo]);

    return (
        <div className="windmill-canvas-wrapper">
            {useVideo ? (
                <video
                    src="/homevideo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-bg-video"
                    onError={() => {
                        console.warn('Background video not found, using canvas animation fallback.');
                        setUseVideo(false);
                    }}
                />
            ) : (
                <canvas ref={canvasRef} className="windmill-canvas" />
            )}
        </div>
    );
};

export default WindmillAnimation;
