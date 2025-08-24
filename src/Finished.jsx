const ticketWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #ffe8e8 0%, #fff8e6 100%)",
  padding: "20px",
};

const ticketStyle = {
  position: "relative",
  background: "#fff",
  borderRadius: "16px",
  maxWidth: "420px",
  width: "100%",
  textAlign: "center",
  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  overflow: "hidden",
  border: "2px dashed #bb5c5c",
};

const headerStyle = {
  background: "linear-gradient(90deg, #bb5c5c, #e7b96c)",
  color: "#fff",
  padding: "20px",
  fontSize: "1.8rem",
  fontWeight: "700",
  textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
};

const bodyStyle = {
  padding: "24px 16px",
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#bb5c5c",
  marginBottom: "12px",
};

const textStyle = {
  fontSize: "1rem",
  color: "#444",
  marginBottom: "8px",
};

const confettiStyle = {
  fontSize: "2rem",
};

const footerStyle = {
  borderTop: "1px dashed #ccc",
  padding: "16px",
  fontSize: "0.9rem",
  color: "#666",
  background: "#fafafa",
};

const whatsappBtn = {
  display: "inline-block",
  marginTop: "12px",
  padding: "12px 24px",
  background: "#25D366",
  color: "#fff",
  fontWeight: "600",
  borderRadius: "30px",
  textDecoration: "none",
  transition: "all 0.2s ease",
  boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
};

const whatsappBtnHover = {
  transform: "scale(1.05)",
};

const Finished = () => (
  <div style={ticketWrapper}>
    <div style={ticketStyle}>
      <div style={headerStyle}>🎉 MuLearn Onam Hunt</div>
      <div style={bodyStyle}>
        <div style={confettiStyle}>✨🎊🥳</div>
        <h2 style={titleStyle}>Congratulations!</h2>
        <p style={textStyle}>
          You have successfully completed the <b>MuLearn Onam Treasure Hunt</b>!
        </p>
        <p style={textStyle}>Thank you for participating.</p>

        {/* WhatsApp CTA */}
        <a
          href="https://chat.whatsapp.com/F3d33EFUVcYAtSpBKK942s?mode=ems_copy_t"
          target="_blank"
          rel="noopener noreferrer"
          style={whatsappBtn}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = whatsappBtnHover.transform)
          }
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          📲 Join WhatsApp Group to Know the Winner
        </a>
      </div>

      <div style={footerStyle}>🎟️ This ticket is your badge of honor – cherish it!</div>
    </div>
  </div>
);

export default Finished;
