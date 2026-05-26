import React from "react";
import { useNavigate } from "react-router-dom";
import teamImg from "../../assets/team/team.jpg";
import styles from "./Team.module.css";

const teams = [
  { label: "男籃", path: "/team/basketball-men" },
  { label: "女籃", path: "/team/basketball-women" },
  { label: "男排", path: "/team/volleyball-men" },
  { label: "女排", path: "/team/volleyball-women" },
  { label: "羽球", path: "/team/badminton" },
  { label: "桌球", path: "/team/table-tennis" },
  { label: "棒球", path: "/team/baseball" },
  { label: "網球", path: "/team/tennis" },
  { label: "足球", path: "/team/soccer" },
];

export default function Team() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {/* Hero 圖 */}
      <div className={styles.hero}>
        <img
          src={teamImg}
          alt="系隊合照"
          className={styles.heroImg}
        />
      </div>

      {/* 系隊介紹 */}
      <section className={styles.section}>
        <h2 className={styles.title}>系隊介紹</h2>
        <div className={styles.divider} />

        <div className={styles.buttons}>
          {teams.map((team) => (
            <button
              key={team.label}
              className={styles.teamBtn}
              onClick={() => team.path && navigate(team.path)}
            >
              {team.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
