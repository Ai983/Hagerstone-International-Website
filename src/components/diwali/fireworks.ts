import confetti from "canvas-confetti";

export function launchFireworks(duration = 2000) {
  const end = Date.now() + duration;
  const colors = ["#FFD700", "#FF6B6B", "#FF00C8", "#6C63FF", "#00FFF5", "#F4A261"];

  // ✅ Create canvas manually so we can control its position and layering
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none"; // prevent blocking clicks
  canvas.style.zIndex = "40"; // sits behind fullscreen overlay (z-50)
  canvas.id = "fireworks-canvas";

  // ✅ Append behind fullscreen overlay (if exists)
  const existingOverlay = document.getElementById("fullscreen-menu");
  if (existingOverlay) {
    existingOverlay.parentElement?.insertBefore(canvas, existingOverlay);
  } else {
    document.body.appendChild(canvas);
  }

  // ✅ Initialize confetti with controlled canvas
  const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });

  // ✅ Fireworks loop
  (function frame() {
    myConfetti({
      particleCount: 6,
      startVelocity: 65,
      spread: 80,
      ticks: 180,
      origin: { x: Math.random(), y: Math.random() * 0.5 },
      colors,
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    } else {
      // 🧹 Clean up canvas when fireworks end
      setTimeout(() => {
        canvas.remove();
      }, 800);
    }
  })();
}
