
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <a
        href="https://www.instagram.com/juanma.hinojosa/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
        className="poppins-regular"
      >
        Teu futuro namorodo é este, prohibido machucar e devolver pra a mae
      </a>
    </footer>
  );
};

const styles = {
  footer: {
    // width: "100%",
    padding: "20px 10px",
    textAlign: "center",
    // position: "relative",
    bottom: 0,
    fontSize: "14px",
    backgroundColor: "#111",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    // transition: "opacity 0.3s ease",
  },
};

export default Footer;