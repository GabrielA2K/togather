import { Icon } from "@iconify/react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <section id="footer-top">
        <div className="footer-content">
          <div className="footer-item">
            <p className="footer-label">ToGather</p>
            <p className="footer-description">
              A Non-Profit Dedicated to <br /> Empowering Communities
            </p>
            <a href="https://www.linkedin.com/company/togather-c-i-c" target="_blank" style={{ marginRight: "0.5rem" }}>
              <Icon
                icon="mingcute:linkedin-line"
                width={24}
                height={24}
                color="rgba(255, 255, 255, 0.79)"
              />
            </a>
            {/* <a href="#">
              <Icon
                icon="mingcute:facebook-line"
                width={24}
                height={24}
                color="rgba(255, 255, 255, 0.79)"
              />
            </a> */}
          </div>
          <div className="footer-item">
            <p className="footer-label">Legal</p>
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Condition</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Accessibility Statement</a>
            </div>
          </div>
          <div className="footer-item">
            <p className="footer-label">Contact Us</p>
            <p className="footer-contact">
              <div
                style={{
                  marginTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.2rem",
                }}
              >
                <Icon icon="mingcute:location-line" width={18} height={18} />
                <p>85 Great Portland Street, London, England, W1W 7LT</p>
              </div>
              <div
                style={{
                  marginTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.2rem",
                }}
              >
                <Icon icon="mingcute:mail-line" width={18} height={18} />
                <p>info@togather.org.uk</p>
              </div>
            </p>
          </div>
        </div>
      </section>
      <section id="footer-bottom">
        <p className="footer-copyright">
          © 2025 ToGather. All rights reserved.
        </p>
        <p className="footer-copyright">
          Developed by A2K Group Corporation © 2025
        </p>
      </section>
    </footer>
  );
}
