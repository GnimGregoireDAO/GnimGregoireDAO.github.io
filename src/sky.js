  const mulberry32 = (seed) => () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  export const drawSky = (canvas) => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    // Grille : cercles de déclinaison autour d'un pôle hors cadre, méridiens tous les 12°
    const px = w * 0.64;
    const py = -h * 0.62;
    const reach = Math.hypot(Math.max(px, w - px), h - py);
    const step = Math.max(w, h) * 0.15;
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(150, 180, 255, 0.075)";
    for (let r = step; r < reach + step; r += step) {
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(150, 180, 255, 0.055)";
    for (let deg = 0; deg < 360; deg += 12) {
      const a = (deg * Math.PI) / 180;
      ctx.beginPath();
      ctx.moveTo(px + Math.cos(a) * step * 0.5, py + Math.sin(a) * step * 0.5);
      ctx.lineTo(px + Math.cos(a) * reach, py + Math.sin(a) * reach);
      ctx.stroke();
    }

    // Zones de texte : pas d'étoile brillante ni d'écliptique sous les mots
    const box = canvas.getBoundingClientRect();
    const holes = [];
    const pad = 14;
    const addRect = (r) => {
      if (r.width && r.height) {
        holes.push({ x: r.left - box.left - pad, y: r.top - box.top - pad, w: r.width + pad * 2, h: r.height + pad * 2 });
      }
    };
    document.querySelectorAll(".topbar a, #carte .hero-copy h1, #carte .hero-copy p, #carte .hero-actions a, #carte .legend, #carte .chart-title").forEach((el) => {
      if (el.matches("h1, p")) {
        const range = document.createRange();
        range.selectNodeContents(el);
        Array.from(range.getClientRects()).forEach(addRect);
      } else {
        addRect(el.getBoundingClientRect());
      }
    });
    const inHole = (x, y) => holes.some((r) => x > r.x && x < r.x + r.w && y > r.y && y < r.y + r.h);

    // Écliptique dorée en pointillés
    ctx.save();
    if (holes.length) {
      ctx.beginPath();
      ctx.rect(0, 0, w, h);
      holes.forEach((r) => ctx.rect(r.x, r.y, r.w, r.h));
      ctx.clip("evenodd");
    }
    ctx.setLineDash([2, 7]);
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = "rgba(212, 175, 55, 0.38)";
    ctx.beginPath();
    ctx.moveTo(-20, h * 0.9);
    ctx.quadraticCurveTo(w * 0.52, h * 0.6, w + 20, h * 0.16);
    ctx.stroke();
    ctx.restore();

    // Étoiles : surtout faibles, quelques-unes plus brillantes, aucun halo
    const rand = mulberry32(20261217);
    const count = Math.min(950, Math.round((w * h) / 2300));
    for (let i = 0; i < count; i++) {
      const x = rand() * w;
      const y = rand() * h;
      const mag = Math.pow(rand(), 3.2);
      const tint = rand();
      const radius = 0.35 + mag * 1.35;
      const alpha = (0.2 + mag * 0.7) * (0.65 + rand() * 0.35);
      const rgb = tint < 0.16 ? "156, 188, 255" : tint < 0.2 ? "255, 228, 170" : "234, 240, 255";
      if (radius > 0.55 && inHole(x, y)) continue;
      ctx.fillStyle = `rgba(${rgb}, ${alpha.toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };
