(() => {
  "use strict";

  /* Barre du haut : devient pleine après le défilement */
  const bar = document.querySelector(".topbar");
  if (bar) {
    let ticking = false;
    const update = () => {
      bar.classList.toggle("is-scrolled", window.scrollY > 24);
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }

  /* Ciel du héros : étoiles à graine fixe, grille de planisphère, écliptique. Image statique. */
  const mulberry32 = (seed) => () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const drawSky = (canvas) => {
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

  const sky = document.querySelector(".sky");
  if (sky && sky.getContext) {
    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => drawSky(sky));
    };
    if ("ResizeObserver" in window) {
      new ResizeObserver(schedule).observe(sky);
    } else {
      window.addEventListener("resize", schedule);
    }
    schedule();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);
  }

  /* Copies décoratives de la carte : repérage des fiches et filigrane du contact */
  const heroMap = document.getElementById("sky-map");

  const cloneMap = (target, modifier) => {
    if (!heroMap || !target) return null;
    const copy = heroMap.cloneNode(true);
    copy.removeAttribute("id");
    copy.removeAttribute("role");
    copy.removeAttribute("aria-label");
    copy.classList.remove("map--hero");
    copy.classList.add(modifier);
    copy.setAttribute("aria-hidden", "true");
    copy.setAttribute("focusable", "false");
    copy.querySelectorAll("a").forEach((a) => {
      a.setAttribute("tabindex", "-1");
      a.removeAttribute("aria-label");
    });
    target.appendChild(copy);
    return copy;
  };

  const finderMap = cloneMap(document.querySelector(".finder-map"), "map--finder");
  cloneMap(document.querySelector(".signal-sky"), "map--watermark");

  /* Survol ou focus d'une étoile : ses tracés passent à l'or */
  const lightStar = (map, id, on) => {
    if (!map) return;
    map.querySelectorAll(".c-line").forEach((line) => {
      if (line.dataset.a === id || line.dataset.b === id) line.classList.toggle("is-lit", on);
    });
    const star = map.querySelector(`.star[data-id="${id}"]`);
    if (star) star.classList.toggle("is-hot", on);
  };

  const wireMap = (map) => {
    if (!map) return;
    map.querySelectorAll(".star").forEach((star) => {
      const id = star.dataset.id;
      star.addEventListener("pointerenter", () => lightStar(map, id, true));
      star.addEventListener("pointerleave", () => lightStar(map, id, false));
      star.addEventListener("focus", () => lightStar(map, id, true));
      star.addEventListener("blur", () => lightStar(map, id, false));
    });
  };

  const wireList = (links, map) => {
    links.forEach((link) => {
      const id = link.hash.slice(1);
      ["pointerenter", "focus"].forEach((ev) => link.addEventListener(ev, () => lightStar(map, id, true)));
      ["pointerleave", "blur"].forEach((ev) => link.addEventListener(ev, () => lightStar(map, id, false)));
    });
  };

  wireMap(heroMap);
  wireMap(finderMap);
  wireList(document.querySelectorAll(".chart-key a"), heroMap);
  wireList(document.querySelectorAll(".finder-list a"), finderMap);

  /* Repérage : la fiche lue devient l'étoile courante */
  const finderLinks = [...document.querySelectorAll(".finder-list a")];
  const setCurrent = (id) => {
    finderLinks.forEach((a) => {
      if (a.hash.slice(1) === id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
    if (!finderMap) return;
    finderMap.querySelectorAll(".star").forEach((s) => s.classList.toggle("is-current", s.dataset.id === id));
    finderMap.querySelectorAll(".c-line").forEach((l) => {
      l.classList.toggle("is-path", l.dataset.a === id || l.dataset.b === id);
    });
  };

  if ("IntersectionObserver" in window) {
    const entries = document.querySelectorAll(".entry[data-star]");
    if (entries.length) {
      setCurrent(entries[0].dataset.star);
      const spy = new IntersectionObserver((records) => {
        records.forEach((r) => {
          if (r.isIntersecting) setCurrent(r.target.dataset.star);
        });
      }, { rootMargin: "-35% 0px -60% 0px" });
      entries.forEach((e) => spy.observe(e));
    }

    /* Navigation : section en cours */
    const navLinks = [...document.querySelectorAll(".nav a")];
    const sections = ["carte", "projets", "competences", "parcours", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const navSpy = new IntersectionObserver((records) => {
      records.forEach((r) => {
        if (!r.isIntersecting) return;
        navLinks.forEach((a) => {
          if (a.hash === `#${r.target.id}`) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => navSpy.observe(s));
  }
})();
