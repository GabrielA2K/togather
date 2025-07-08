
import { Icon } from "@iconify/react/dist/iconify.js";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

import TextTag from "../../components/TextTag/TextTag";
import ValuesCard from "../../components/ValuesCard/ValuesCard";
import MissionPlatformItem from "../../components/MissionPlatformItem/MissionPlatformItem";

import { CoreValues } from "../../information/CoreValues";
import { MissionPlatforms } from "../../information/MissionPlatforms";

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
              "text-block" + (curValue === key ? " focused" : "")
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

    const missionPlatformsMap = MissionPlatforms.map((platform, index) => {

        return (
            <MissionPlatformItem
                index={index}
                title={platform.title}
                color={platform.color}
                icon={platform.icon}
                description={platform.description}
            />
            
        );
    })

    useEffect(() => {
        setValue(0); // Force select first on load
    }, []);

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
                    {missionPlatformsMap}
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