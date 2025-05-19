import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react/dist/iconify.js";

import TextTag from "../../components/TextTag/TextTag";
import CommunityFundSubCard from "../../components/CommunityFundSubCard/CommunityFundSubCard";
import FeatureSponsorSubCard from "../../components/FeatureSponsorSubCard/FeatureSponsorSubCard";

import { CommunityFeatures } from "../../information/CommunityFeatures";
import { SponsorFeatures } from "../../information/SponsorFeatures";
import "./Donation.css";

export default function Donation(prop) {
  const [communityFundRef, communityFundInView] = useInView({ threshold: 0.2 });
  const [featureSponsorRef, featureSponsorInView] = useInView({ threshold: 1 });

  const communityFeaturesMap = CommunityFeatures.map((feature, index) => {
    return (
      <CommunityFundSubCard
        key={index}
        title={feature.title}
        icon={feature.icon}
        body={feature.description}
      />
    );
  });

  const sponsorFeaturesMap = SponsorFeatures.map((feature, index) => {
    return (
      <FeatureSponsorSubCard
        key={index}
        title={feature.title}
        icon={feature.icon}
        body={feature.description}
        link={feature.link}
      />
    );
  });

  return (
    <>
      <div className="divider"></div>
      <section ref={prop.ref} id="donation" className={"impact"}>
        <TextTag text="Support Us" color="#40A3FF" centered={true} />

        <p className="title">Donations and Sponsorships</p>

        <p className="f-center">
          Support our platform through various donation and sponsorship
          opportunities
        </p>
        <div className="donation-tabs scrollable-x no-scrollbar">
          <div
            className={"donation-tab" + (communityFundInView ? " active" : "")}
            style={{ "--color": "#2294FF" }}
            onClick={() => {
              document
                .getElementById("community-fund-donate-section")
                .scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "nearest",
                });
            }}
          >
            Community Fund
          </div>
          <div
            className={"donation-tab" + (featureSponsorInView ? " active" : "")}
            style={{ "--color": "#2294FF" }}
            onClick={() => {
              document
                .getElementById("feature-sponsor-donate-section")
                .scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "nearest",
                });
            }}
          >
            Feature Sponsorship
          </div>

          {/* <div className="donation-tab">Membership Packages</div>
                <div className="donation-tab">Donor & Sponsor Program</div> */}
        </div>

        <div className="all-donate-container scrollable-x no-scrollbar">
          <div
            ref={communityFundRef}
            id="community-fund-donate-section"
            className="donate-main-container"
            style={{ "--color": "#2294FF" }}
          >
            <div className="donate-main-card">
              <div className="donate-card-title">
                <Icon
                  icon="mingcute:heart-line"
                  width={24}
                  className="title-icon"
                />
                <p className="title">Community Fund</p>
              </div>

              <p className="donate-card-body">
                Support the heart of inclusion by contributing to our Community
                Fund. This initiative ensures underfunded organisations gain
                access to vital tools and resources on our platform, empowering
                them to thrive. Every donation directly expands accessibility,
                bridging the gap for communities in need.
              </p>
              <div className="donate-actions">
                <button
                  className="donate-primary"
                  onClick={() => {
                    window.open(
                      "https://donate.stripe.com/cNi8wQa6ibgk1EfaKQ4sE00",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Donate to Community Fund
                </button>
                {/* <button className="donate-secondary">Suggest a Feature</button> */}
              </div>
            </div>
            <div className="donate-subcards">{communityFeaturesMap}</div>
          </div>

          <div
            id="feature-sponsor-donate-section"
            className="donate-main-container"
            style={{ "--color": "#2294FF" }}
          >
            <div ref={featureSponsorRef} className="donate-main-card">
              <div className="donate-card-title">
                <Icon
                  icon="mingcute:gift-line"
                  width={24}
                  className="title-icon"
                />
                <p className="title">Feature Sponsorship</p>
              </div>

              <p className="donate-card-body">
                Make a tangible impact by sponsoring specific platform features
                tailored for targeted communities. Whether it's advanced
                safeguarding tools, profile management systems, or accessibility
                enhancements, your sponsorship directly addresses the unique
                needs of the communities we serve.
              </p>
              <div className="donate-actions">
                {/* <button className="donate-primary">Suggest a Feature</button> */}
              </div>
            </div>

            <div className="donate-subcards">{sponsorFeaturesMap}</div>
          </div>
        </div>

        <br />
        <br />
      </section>
    </>
  );
}
