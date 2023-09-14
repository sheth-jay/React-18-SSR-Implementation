import React, { Suspense } from "react";

const styles = {
  container: {
    maxWidth: "120rem",
    padding: "3.2rem",
    margin: "50px auto",
    width: "800px",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  },

  heading: {
    color: "#333333",
    letterSpacing: "0.1rem",
  },

  list: {
    marginLeft: "20px",
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
  },

  list_item: {
    color: "#333333",
    letterSpacing: "1.2px",
    fontSize: "1.6rem",
    alignItems: "center",
    padding: "0.2rem",
    borderRadius: "0.3rem",
  },
};
const About = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div style={styles.container}>
        <div>
          <h1 style={styles.heading}> Server React DOM APIs </h1>
          <div style={styles.list}>
            <p style={styles.list_item}>1. renderToPipeableStream</p>
            <p style={styles.list_item}>2. renderToStaticNodeStream</p>
            <p style={styles.list_item}>3. renderToReadableStream</p>
            <p style={styles.list_item}>4. renderToStaticMarkup</p>
            <p style={styles.list_item}>5. renderToString</p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};
export default About;
