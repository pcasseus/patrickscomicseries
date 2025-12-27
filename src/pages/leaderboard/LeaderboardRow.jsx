import { useCountUp } from "./useCountUp";

export default function LeaderboardRow({ entry }) {
  const powerPoints = useCountUp(entry.points);

  return (
    <div
      id={`row-${entry.slug}`}
      className="lb-row"
    >
      <div className="rank">#{entry.rank}</div>

      <img
        className="avatar"
        src={entry.image}
        alt={entry.name}
      />

      <div className="name">
        {entry.name}
        {entry.delta !== 0 && (
          <span
            className={`delta ${
              entry.delta > 0 ? "up" : "down"
            }`}
          >
            {entry.delta > 0
              ? `▲ ${entry.delta}`
              : `▼ ${Math.abs(entry.delta)}`}
          </span>
        )}
      </div>

      <div className="points">
        {powerPoints.toLocaleString()} PP
      </div>

      <style>{`
        .lb-row {
          display: grid;
          grid-template-columns: 60px 44px 1fr 140px;
          align-items: center;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255,200,66,0.15);
          will-change: transform; /* ✅ Smooth FLIP */
        }

        .rank {
          font-weight: 800;
          color: #f5c842;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(255,200,66,0.6);
        }

        .name {
          font-weight: 600;
        }

        .delta {
          font-size: 12px;
          margin-left: 6px;
        }

        .delta.up {
          color: #22c55e;
        }

        .delta.down {
          color: #ef4444;
        }

        .points {
          text-align: right;
          opacity: 0.8;
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </div>
  );
}
