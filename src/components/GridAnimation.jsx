import React, { useEffect, useRef } from 'react';

const GridAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        let width = 0;
        let height = 0;
        let nodes = [];
        let pulses = [];
        const maxNodes = 60;
        const connectionDist = 140;
        const pulseProbability = 0.05;
        
        const colorNode = 'rgba(0, 242, 254, 0.4)';
        const colorPulse = '#00f2fe';
        const colorPulseAlt = '#f59e0b';
        
        const mouse = { x: null, y: null };
        
        const resize = () => {
            if (!canvas) return;
            const container = canvas.parentElement;
            if (!container) return;
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;
        };
        
        const init = () => {
            resize();
            nodes = [];
            pulses = [];
            for (let i = 0; i < maxNodes; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    radius: Math.random() * 2 + 1.5,
                    connections: []
                });
            }
        };
        
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        
        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };
        
        const updateConnections = () => {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].connections = [];
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < connectionDist) {
                        nodes[i].connections.push({ index: j, dist: dist });
                    }
                }
            }
        };
        
        const spawnPulse = () => {
            const nodesWithConn = nodes.filter(n => n.connections.length > 0);
            if (nodesWithConn.length === 0) return;
            
            const startNode = nodesWithConn[Math.floor(Math.random() * nodesWithConn.length)];
            const conn = startNode.connections[Math.floor(Math.random() * startNode.connections.length)];
            const endNode = nodes[conn.index];
            
            pulses.push({
                startX: startNode.x,
                startY: startNode.y,
                endX: endNode.x,
                endY: endNode.y,
                progress: 0,
                speed: 0.02 + Math.random() * 0.015,
                color: Math.random() > 0.3 ? colorPulse : colorPulseAlt,
                size: Math.random() * 2 + 1.5
            });
        };
        
        const update = () => {
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;
                
                if (mouse.x && mouse.y) {
                    const dx = node.x - mouse.x;
                    const dy = node.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        const force = (120 - dist) / 120;
                        node.x += (dx / dist) * force * 1.5;
                        node.y += (dy / dist) * force * 1.5;
                    }
                }
            });
            
            updateConnections();
            
            if (Math.random() < pulseProbability && pulses.length < 25) {
                spawnPulse();
            }
            
            for (let i = pulses.length - 1; i >= 0; i--) {
                const p = pulses[i];
                p.progress += p.speed;
                if (p.progress >= 1) {
                    pulses.splice(i, 1);
                }
            }
        };
        
        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            
            // Connections
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                node.connections.forEach(c => {
                    const target = nodes[c.index];
                    const alpha = (1 - (c.dist / connectionDist)) * 0.12;
                    ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(target.x, target.y);
                    ctx.stroke();
                });
            }
            
            // Nodes
            nodes.forEach(node => {
                ctx.fillStyle = colorNode;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.fillStyle = 'rgba(0, 242, 254, 0.05)';
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
                ctx.fill();
            });
            
            // Pulses
            pulses.forEach(p => {
                const currentX = p.startX + (p.endX - p.startX) * p.progress;
                const currentY = p.startY + (p.endY - p.startY) * p.progress;
                
                const gradient = ctx.createRadialGradient(
                    currentX, currentY, 0,
                    currentX, currentY, p.size * 3
                );
                gradient.addColorStop(0, p.color);
                gradient.addColorStop(0.5, p.color === colorPulse ? 'rgba(0, 242, 254, 0.3)' : 'rgba(245, 158, 11, 0.3)');
                gradient.addColorStop(1, 'rgba(0,0,0,0)');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(currentX, currentY, p.size * 3, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(currentX, currentY, p.size * 0.8, 0, Math.PI * 2);
                ctx.fill();
            });
        };
        
        const animate = () => {
            update();
            draw();
            animationFrameId = requestAnimationFrame(animate);
        };
        
        init();
        animate();
        
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
    
    return (
        <div className="grid-canvas-container">
            <canvas ref={canvasRef} id="grid-canvas" />
        </div>
    );
};

export default GridAnimation;
