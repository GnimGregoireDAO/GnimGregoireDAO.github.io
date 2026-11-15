import React, { useEffect, useState } from "react";
import Content from "./Content.jsx";
import { drawSky } from "./sky.js";
import { projects } from "./data.jsx";

function useInteraction() {
  const [pointer, setPointer] = useState(null);
  const [focus, setFocus] = useState(null);
  return {
    hot: focus || pointer,
    handlers: (id) => ({
      onPointerEnter: () => setPointer(id),
      onPointerLeave: () => setPointer(null),
      onFocus: () => setFocus(id),
      onBlur: () => setFocus(null),
    }),
  };
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentStar, setCurrentStar] = useState(projects[0].id);
  const heroInteraction = useInteraction();
  const finderInteraction = useInteraction();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", scroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const canvas = document.querySelector(".sky");
    if (!canvas || !canvas.getContext) return;
    let frame = 0;
    let active = true;
    const schedule = () => {
      if (!active) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => drawSky(canvas));
    };
    const observer = "ResizeObserver" in window ? new ResizeObserver(schedule) : null;
    if (observer) observer.observe(canvas);
    else window.addEventListener("resize", schedule);
    schedule();
    if (document.fonts?.ready) document.fonts.ready.then(schedule);
    return () => {
      active = false;
      observer?.disconnect();
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const entryObserver = new IntersectionObserver((records) => {
      records.forEach((record) => {
        if (record.isIntersecting) setCurrentStar(record.target.dataset.star);
      });
    }, { rootMargin: "-35% 0px -60% 0px" });
    document.querySelectorAll(".entry[data-star]").forEach((entry) => entryObserver.observe(entry));
    return () => entryObserver.disconnect();
  }, []);

  const [currentSection, setCurrentSection] = useState(null);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((records) => {
      records.forEach((record) => {
        if (record.isIntersecting) setCurrentSection(record.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["carte", "projets", "competences", "parcours", "contact"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return <Content scrolled={scrolled} currentStar={currentStar} currentSection={currentSection}
    heroInteraction={heroInteraction} finderInteraction={finderInteraction} />;
}
