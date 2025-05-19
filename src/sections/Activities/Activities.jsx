import { Icon } from "@iconify/react/dist/iconify.js";

import TextTag from "../../components/TextTag/TextTag"
import ActivityCard from "../../components/ActivityCard/ActivityCard"

import { OurActivities } from "../../information/OurActivities"

import './Activities.css';

export default function Activities(prop) {


    const ourActivitiesMap = OurActivities.map((act, index) => {
        return (
            <ActivityCard
                key={index}
                id={index}
                title={act.title}
                description={act.description}
                color={act.color}
                icon={act.icon}
                subcontent={act.subcontent}
            />
        );
    });

    return (
        <>
            <div className="divider"></div>
            <section
            id="activities"
            ref={prop.ref}
            className={"activities" + (prop.InView ? " inview" : "")}
            >
            <TextTag text="What We Do" color="#FF2C68" centered={true} />
    
            <p className="title">Our Activities</p>
    
            <p className="f-center">
                We help communities transition to digital-first solutions that
                strengthen connection, improve communication, and support better
                organisation.
            </p>
            {/* <img src={PeopleHero} alt="" srcSet="" className='hero-illustration' /> */}
            <br />
            <br />
            <div className="activities-container">
                {ourActivitiesMap}
                <div
                id="demo-card"
                ref={prop.demoRef}
                className={"demo-card from-left" + (prop.demoInView ? " visible" : "")}
                style={{ "--color": "#40A3FF" }}
                >
                <Icon
                    icon={"mingcute:calendar-time-add-line"}
                    width={56}
                    color="#40A3FF"
                />
                <p className="demo-title">Book a Demo With Us</p>
                <p className="demo-subtitle">
                    Schedule a personalised demonstration of our platform and
                    services.
                </p>
                <button className="demo-book" onClick={()=>{
                    document.querySelector('.modal-overlay').classList.remove('hidden')
                    }}>Book Your Demo</button>
                </div>
            </div>
            </section>
        </>
    )
}