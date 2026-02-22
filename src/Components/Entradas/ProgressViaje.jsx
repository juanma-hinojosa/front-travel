import React from "react";

const ProgressViaje = ({ total, meta }) => {
  const porcentaje = Math.min((total / meta) * 100, 100);

  return (
    <div style={styles.wrapper}>
      {/* BANDERAS */}
      <div style={styles.flags}>
        <img
          src="https://flagcdn.com/w40/br.png"
          alt="Brasil"
          style={styles.flag}
        />
        <img
          src="https://flagcdn.com/w40/ar.png"
          alt="Argentina"
          style={styles.flag}
        />
      </div>

      {/* BARRA */}
      <div style={styles.barContainer}>
        <div
          style={{
            ...styles.progress,
            width: `${porcentaje}%`,
          }}
        />

        {/* AVIÓN */}
        <div
          style={{
            ...styles.plane,
            left: `calc(${porcentaje}% - 15px)`,
          }}
        >
          ✈️
        </div>
      </div>

      {/* TEXTO PROGRESO */}
      <p style={styles.text} className="poppins-regular" >
        {porcentaje.toFixed(1)}% meta completada
      </p>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100%",
    maxWidth: "350px",
    margin: "20px auto",
    textAlign: "center",
  },
  flags: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
  },
  flag: {
    width: "35px",
  },
  barContainer: {
    position: "relative",
    height: "12px",
    background: "#e0e0e0",
    borderRadius: "20px",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    background: "linear-gradient(90deg, #009c3b, #74acdf)",
    borderRadius: "20px",
    transition: "width 0.5s ease",
  },
  plane: {
    position: "absolute",
    top: "-0px",
    fontSize: "10px",
    transition: "left 0.5s ease",
  },
  text: {
    marginTop: "10px",
    fontSize: "14px",
  },
};

export default ProgressViaje;