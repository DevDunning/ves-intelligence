// Reserved for future interactivity
// Simple floating particles background for full site
const bgCanvas = document.createElement('canvas');
bgCanvas.id = 'bg-canvas';
bgCanvas.style.position = 'fixed';
bgCanvas.style.top = '0';
bgCanvas.style.left = '0';
bgCanvas.style.width = '100%';
bgCanvas.style.height = '100%';
bgCanvas.style.zIndex = '-2';
bgCanvas.style.pointerEvents = 'none';
document.body.appendChild(bgCanvas);

const ctx = bgCanvas.getContext('2d');
let circles = [];

function resizeCanvas() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 60; i++) {
  circles.push({
    x: Math.random() * bgCanvas.width,
    y: Math.random() * bgCanvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    alpha: Math.random() * 0.5 + 0.3
  });
}

function animate() {
  ctx.clearRect(0,0,bgCanvas.width,bgCanvas.height);
  circles.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(31,111,235,${c.alpha})`;
    ctx.fill();
    c.x += c.dx;
    c.y += c.dy;
    if(c.x < 0 || c.x > bgCanvas.width) c.dx *= -1;
    if(c.y < 0 || c.y > bgCanvas.height) c.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();
