import React from "react";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#212529",
        color: "white",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <Container>
        <p>
          &copy; {new Date().getFullYear()} Netflix Clone. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
