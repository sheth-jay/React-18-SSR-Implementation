import React from "react";

const styles = {
  container: {
    maxWidth: "120rem",
    padding: "0 3.2rem",
    margin: "0 auto",
    width: "800px",
  },

  section: {
    marginTop: "10px",
    padding: "2.2rem",
    borderRadius: "0.3rem",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },

  heading: {
    color: "#333333",
    letterSpacing: "0.1rem",
  },

  content: {
    fontSize: "1.4rem",
    color: "#4d4d4d",
    lineHeight: "1.8rem",
  },
};
const HomeModule = () => {
  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h1 style={styles.heading}>Client-side rendering (CSR)</h1>
        <p style={styles.content}>
          Refers to the process of rendering web pages on the client side (i.e.,
          in the user's web browser). The server merely provides the raw data or
          content, which the client-side JavaScript utilizes to dynamically
          construct the final rendered page.
        </p>
      </div>
      <div style={styles.section}>
        <h1 style={styles.heading}>Server-side rendering (SSR)</h1>
        <p style={styles.content}>
          Refers to the process of rendering web pages on the server before
          sending them to the client's web browser. Rather than transmitting raw
          data and depending on client-side JavaScript to build the final HTML
          markup, this approach involves the server generating the final HTML
          markup for a web page and sending it to the client.
        </p>
      </div>
    </div>
  );
};

export default HomeModule;
