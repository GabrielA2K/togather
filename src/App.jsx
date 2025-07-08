import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react/dist/iconify.js";

import Nav from "./components/Nav/Nav";
import Hero from "./sections/Hero/Hero";
import Purpose from "./sections/Purpose/Purpose";
import Activities from "./sections/Activities/Activities";
import Impact from "./sections/Impact/Impact";
import Showcase from "./sections/Showcase/Showcase";
import Donation from "./sections/Donation/Donation";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";


const demoSchema = Joi.object({
  full_name: Joi.string().required(),
  organisation_name: Joi.string().required(),
  email: Joi.string().required(),
  phone_number: Joi.string().required(),
});

function App() {
  const [curSection, setSection] = useState("");

  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [purposeRef, purposeInView] = useInView({ threshold: 0.2 });
  const [activitiesRef, activitiesInView] = useInView({ threshold: 0.3 });
  const [impactRef, impactInView] = useInView({ threshold: 0.3 });
  const [donationRef, donationInView] = useInView({ threshold: 0.3 });

  const [demoRef, demoInView] = useInView({ threshold: 0.2 });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(demoSchema) });

  useEffect(() => {
    setSection((prev) => {
      switch (true) {
        case heroInView:
          return "hero";
        case purposeInView:
          return "purpose";
        case activitiesInView:
          return "activities";
        case demoInView:
          return "demo-card";
        case impactInView:
          return "impact";
        case donationInView:
          return "donation";
        default:
          return prev;
      }
    });
    console.log(curSection);
  }, [
    heroInView,
    purposeInView,
    activitiesInView,
    demoInView,
    impactInView,
    donationInView,
  ]);

  // const onSubmit = async (data) => {
  //   console.log(data);
  //   const response = await axios.post("http://localhost:3000/api/v1/email", {
  //     full_name: data.full_name,
  //     email: data.email,
  //     phone_number: data.phone_number,
  //     organisation_name: data.organisation_name
  //   })
  //   console.log(response);
  // };

  const [loadState, setLoadState] = useState('initial');

  const onSubmit = async (data) => {
    setLoadState('loading'); // Start loading
    try {
      console.log(data);
      const response = await axios.post("https://togather-api.onrender.com:3000/api/v1/email", {
        full_name: data.full_name,
        email: data.email,
        phone_number: data.phone_number,
        organisation_name: data.organisation_name,
      });
      console.log(response);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoadState('finish'); // End loading
    }
  };


  return (
    <>
      {/* Viewport Background Gradient Blur */}
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="blob b3"></div>
      <div className="blob b4"></div>
      {/* End of Viewport Background Gradient Blur */}

      <Nav section={curSection} />
      <Hero ref={heroRef} inView={heroInView} />
      <Purpose ref={purposeRef} inView={purposeInView} />
      <Activities
        ref={activitiesRef}
        inView={activitiesInView}
        demoRef={demoRef}
        demoInView={demoInView}
      />
      
      {/* <Impact ref={impactRef} inView={impactInView} /> */}
      <Showcase />
      <Donation ref={donationRef} inView={donationInView} />
      <br />
      <br />
      <Footer />

      <div className="modal-overlay hidden">
        {/* <div className="modal-card">
          <header>
            <div className="card-title">
              <p className="title">Schedule a Demo to See How It Works</p>
              <p className="description">
                Fill out the form below and our team will contact you within 24
                hours.
              </p>
            </div>
          </header>
          <main>
            <p className="body-title">Your Information</p>
            <p className="body-description">
              Tell us about yourself by providing your details below
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-item">
                <p className="input-name">Full Name *</p>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("full_name")}
                />
                {errors.full_name && <span>Full name is required</span>}
              </div>
              <div className="input-item">
                <p className="input-name">Email Address *</p>
                <input
                  type="text"
                  placeholder="Doe@example.com"
                  {...register("email")}
                />
                {errors.email && <span>Email is required</span>}
              </div>

              <div className="input-item">
                <p className="input-name">Phone Number *</p>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  {...register("phone_number")}
                />
                {errors.phone_number && <span>Phone number is required</span>}
              </div>

              <div className="input-item">
                <p className="input-name">Organisation *</p>
                <input
                  type="text"
                  placeholder="Your Organisation Name"
                  {...register("organisation_name")}
                />
                {errors.organisation_name && <span>Organisation name is required</span>}
              </div>

              <div
                className="cancel"
                onClick={() => {
                  document
                    .querySelector(".modal-overlay")
                    .classList.add("hidden");
                  setLoadState('initial'); // Reset load state
                }}
              >
                Close
              </div>
              <button className="submit" type="submit" disabled={loadState === 'loading' || loadState === 'finish'}>
                {(loadState === 'loading' ? <Icon icon={'eos-icons:three-dots-loading'} width={32}></Icon> : (loadState === 'finish') ? 'Request Sent' : 'Request Demo')}
                
              </button>
            </form>
          </main>
        </div> */}
        <div className="demo-request-modal">
          <div className="left">
            <header>
              <div className="logo"></div>
              <p className="heading">
                Schedule a Demo to See How It Works
              </p>
              <p className="subheading">
                Fill out the form below and our team will contact you within 24
                hours.
              </p>
            </header>
            <main>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-item">
                  <p className="input-name">Full Name * {errors.full_name && <span className="error-message">Full name is required</span>}</p>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("full_name")}
                  />
                  
                </div>
                <div className="input-item">
                  <p className="input-name">Email Address * {errors.email && <span className="error-message">Email is required</span>}</p> 
                  <input
                    type="text"
                    placeholder="Doe@example.com"
                    {...register("email")}
                  />
                  
                </div>

                <div className="input-item">
                  <p className="input-name">Phone Number * {errors.phone_number && <span className="error-message">Phone number is required</span>}</p>
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    {...register("phone_number")}
                  />
                  
                </div>

                <div className="input-item">
                  <p className="input-name">Organisation * {errors.organisation_name && <span className="error-message">Organisation name is required</span>}</p>
                  <input
                    type="text"
                    placeholder="Your Organisation Name"
                    {...register("organisation_name")}
                  />
                  
                </div>

                <div className="form-actions">
                  <div
                    className="cancel"
                    onClick={() => {
                      document
                        .querySelector(".modal-overlay")
                        .classList.add("hidden");
                      setLoadState('initial'); // Reset load state
                    }}
                  >
                    Close
                  </div>
                  <button className="submit" type="submit" disabled={loadState === 'loading' || loadState === 'finish'}>
                    {(loadState === 'loading' ? <Icon icon={'eos-icons:three-dots-loading'} width={32}></Icon> : (loadState === 'finish') ? 'Request Sent' : 'Request Demo')}
                    
                  </button>
                </div>
                <p className="agreement">By submitting this form, you agree to our <span className="link">privacy policy</span> and <span className="link">terms of service</span>.</p>
                
              </form>
            </main>
          </div>
          <div className="right">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
