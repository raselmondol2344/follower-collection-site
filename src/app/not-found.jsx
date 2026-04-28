import Link from "next/link";

export default function NotFound() {
  return (
    <div style={styles.container}>
      {/* background glow */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      <div style={styles.card}>
        <h1 style={styles.title}>404</h1>
        <h2 style={styles.subtitle}>Page Not Found</h2>
        <p style={styles.text}>
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link href="/" style={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #0f172a, #020617)",
    position: "relative",
    overflow: "hidden",
  },

  /* glowing background circles */
  glow1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, #6366f1, transparent)",
    top: "-50px",
    left: "-50px",
    filter: "blur(80px)",
  },
  glow2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, #ec4899, transparent)",
    bottom: "-50px",
    right: "-50px",
    filter: "blur(80px)",
  },

  /* card */
  card: {
    textAlign: "center",
    padding: "40px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    color: "#fff",
    zIndex: 1,
  },

  title: {
    fontSize: "80px",
    margin: "0",
    background: "linear-gradient(90deg, #6366f1, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    margin: "10px 0",
    fontWeight: "500",
  },

  text: {
    marginBottom: "20px",
    color: "#cbd5f5",
  },

  button: {
    padding: "10px 20px",
    background: "#6366f1",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    transition: "0.3s",
  },
};