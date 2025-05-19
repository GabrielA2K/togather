
import { Icon } from "@iconify/react/dist/iconify.js";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

import TextTag from "../../components/TextTag/TextTag";
import ValuesCard from "../../components/ValuesCard/ValuesCard";

import { CoreValues } from "../../information/CoreValues";

import './Purpose.css';

export default function Purpose(prop) {
    
    const [curValue, setValue] = useState(0);
    const [gatherRef, gatherInView] = useInView({ threshold: 1 });

    const setCurrentValue = (value) => {
        setValue(value);
    };

    const valuesCardMap = CoreValues.map((value, index) => {
    return (
        <ValuesCard
            key={index}
            id={index}
            title={value.title}
            color={value.color}
            description={value.description}
            setCurrentValue={setCurrentValue}
        />
        );
    });

    const valuesBlockScrollMap = CoreValues.map((value, key) => {
        return (
          <p
            key={key}
            className={
              "text-block block" + key + " " + (curValue === key ? " focused" : "")
            }
            style={{ "--color": value.color }}
            onClick={() => {
              document.querySelector(".values-card.block" + key).scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "nearest",
              });
            }}
          >
            {value.title.charAt(0)}
          </p>
        );
    });



    return (
        <>
            <div className="divider"></div>
            <section
            id="purpose"
            ref={prop.ref}
            className={"purpose" + (prop.InView ? " inview" : "")}
            >
            <TextTag text="Our Purpose" color="#8058F8" centered={true} />
    
            <p className="title">Why We Built ToGather</p>
    
            <p className="f-center">
                Our mission, vision, and values guide everything we do.
            </p>
    
            <br />
            <br />
    
    
            <div className="mission-vision-container">
                <div className="mv-card mission-card">
                <div className="icon-card-icon">
                    <Icon icon="mingcute:target-line" width={24} color="#FFFFFF" />
                </div>
                <div className="icon-card-text">
                    <p className="title">Mission</p>
                    <p className="secondary">
                    A non-profit organisation dedicated to supporting charities and community interest organisations, particularly faith communities, educational institutions, and local groups. We achieve this by providing a bespoke Digital Community Engagement Platform.
                    </p>
                </div>
                </div>
                <div className="mv-card vision-card">
                <div className="icon-card-icon">
                    <Icon icon="mingcute:bulb-line" width={24} color="#FFFFFF" />
                </div>
                <div className="icon-card-text">
                    <p className="title">Vision</p>
                    <p className="secondary">
                    To create a globally connected and inclusive community, empowered by secure and accessible digital tools.
                    </p>
                </div>
                </div>
            </div>
    
            <div className="mv-card sub-mission-card">
                <p className="title">
                Our platform is designed to
                </p>
                <div className="mission-list">
                <div className="mission-item" style={{ "--color": "#40A3FF" }}>
                    <div className="icon-wrapper">
                    <Icon icon="mingcute:link-2-line" width={24} />
                    </div>
                    <p className="heading">Strengthen Connections</p>
                    <p className="description">Foster collaboration within communities</p>
                </div>
    
                <div className="mission-item" style={{ "--color": "#A186F3" }}>
                    <div className="icon-wrapper">
                    <Icon icon="mingcute:chart-bar-line" width={24} />
                    </div>
                    <p className="heading">Streamline Workflows</p>
                    <p className="description">Improve overall organisational efficiency</p>
                </div>
    
                <div className="mission-item" style={{ "--color": "#66E086" }}>
                    <div className="icon-wrapper">
                    <Icon icon="mingcute:shield-shape-line" width={24} />
                    </div>
                    <p className="heading">Uphold Safeguarding</p>
                    <p className="description">Ensure accountability through digital tools</p>
                </div>
    
                <div className="mission-item" style={{ "--color": "#FD5959" }}>
                    <div className="icon-wrapper">
                    <Icon icon="mingcute:group-line" width={24} />
                    </div>
                    <p className="heading">Ensure Accessibility</p>
                    <p className="description">Create inclusivity for diverse communities</p>
                </div>
    
                <div className="mission-item" style={{ "--color": "#FFB760" }}>
                    <div className="icon-wrapper">
                    <Icon icon="mingcute:bulb-2-line" width={24} />
                    </div>
                    <p className="heading">Enable Sustainability</p>
                    <p className="description">Through adaptive training & technology</p>
                </div>
                </div>
            </div>
    
            <br />
            <br />
            <br />
            <br />
            <br />
    
            <TextTag text="Our Principles" color="#2294FF" centered={true} />
    
            <p className="title">Our Core Values</p>
            <div
                ref={gatherRef}
                className={"gather-container" + (gatherInView ? " visible" : "")}
            >
                {CoreValues.map((value, key) => {
                return (
                    <p
                    key={key}
                    className={"gather-blocks block" + key}
                    style={{ "--color": value.color, "--delay": key * 100 + "ms" }}
                    onClick={() => {
                        document
                        .querySelector(".values-card.block" + key)
                        .scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "nearest",
                        });
                    }}
                    >
                    {value.title.charAt(0)}
                    </p>
                );
                })}
            </div>
    
            {/* <img src={LetterBlocks} alt="" srcSet="" className='purpose-illustration' onClick={()=>{
                
            }}/> */}
            <p className="f-center">
                Our mission, vision, and values guide everything we do.
            </p>
            <br />
            <br />
    
            <div className="core-values scrollable-x no-scrollbar">
                {valuesCardMap}
            </div>
            <div className="values-navigator">{valuesBlockScrollMap}</div>
            </section>
        </>
    )
}