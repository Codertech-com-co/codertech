import { useEffect, useState } from "react";

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const distanceThreshold = 10; // Umbral para considerar que están "en la mitad"
    const updateTrail = () => {
      const dx = position.x - trail.x;
      const dy = position.y - trail.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > distanceThreshold) {
        setTrail((prev) => ({
          x: prev.x + (position.x - prev.x) * 0.1, // Movimiento suave
          y: prev.y + (position.y - prev.y) * 0.1,
        }));
      }
    };

    const interval = setInterval(updateTrail, 16); // Actualizar cada ~16ms (~60fps)
    return () => clearInterval(interval);
  }, [position, trail]);

  return (
    <div>
      {/* Punto pequeño */}
      <div
        className="w-3 h-3 bg-cyan-400 rounded-full fixed pointer-events-none"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          position: "fixed",
          transition: "none", // Sin retraso
        }}
      />
      {/* Círculo grande */}
      <div
        className="w-16 h-16 border-2 border-cyan-400 rounded-full fixed pointer-events-none"
        style={{
          left: trail.x - 32,
          top: trail.y - 32,
          position: "fixed",
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
}