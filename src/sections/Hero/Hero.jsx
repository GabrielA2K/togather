

import HeroImage from "../../assets/images/hero-image.svg";

import './Hero.css';

export default function Hero(prop) {
    
    return (
        <section
            id="hero"
            ref={prop.ref}
            className={"hero" + (prop.inView ? " inview" : "")}
        >
            <div className="hero-container">
                <div className="hero-heading">
                <p className="hero-title">ToGather</p>
                <p className="hero-subtitle">
                    <span style={{ color: "#2294FF" }}>Bring People</span>{" "}
                    <span style={{ color: "#8058F8" }}>Together.</span>{" "}
                    <span style={{ color: "#56E07B" }}>Build</span>{" "}
                    <span style={{ color: "#FD5959" }}>Something</span>{" "}
                    <span style={{ color: "#FFB81F" }}>Impactful.</span>
                </p>
                </div>
                
                <img
                src={HeroImage}
                alt="Cartoon image of group of people."
                srcSet=""
                className="hero-illustration"
                />

                <div className="hero-foot">
                <p>
                    A non-profit dedicated to empowering communities, your donation helps
                    support programs that empower, and unite.
                </p>
                <br />
                <div className="hero-actions">
                    <button className="hero-primary" onClick={() => {
                    document
                    .getElementById("donation")
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "nearest",
                    });
                }}>
                    Support Us
                    </button>
                    <button className="hero-secondary" onClick={() => {
                    document
                    .getElementById("purpose")
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "nearest",
                    });
                }}>
                    About Us
                    </button>
                </div>
                </div>
            </div>
        </section>
    );
}