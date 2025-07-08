import { Icon } from "@iconify/react/dist/iconify.js";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

import TextTag from "../../components/TextTag/TextTag";

import './Showcase.css';

import GemsVideo from '../../assets/videos/gems.mp4';
import AnnouncementInteraction from '../../assets/videos/1. Announcement Interactions (New).mp4';
import EventAttendance from '../../assets/videos/2. Events & Attendance (New).mp4';
import FamilyManagement from '../../assets/videos/3. Family Management (New).mp4';
import MinistryInteractions from '../../assets/videos/4. Ministry Interactions (New).mp4';
import Dashboard from '../../assets/videos/5. Dashboard (New).mp4';
import MinistryGroups from '../../assets/videos/6. Ministry Groups Management (New).mp4';
import EventManagement from '../../assets/videos/7. Event Scheduling & Management (New).mp4';
import MinistryManagement from '../../assets/videos/8. Ministry Management (Admin) (New).mp4';
import PollManagement from '../../assets/videos/9. Poll Management (New).mp4';
import PollResponse from '../../assets/videos/10. Poll Response Submission (New).mp4';
import ProfileEdit from '../../assets/videos/11. Profile (New).mp4';

export default function Showcase(prop) {
    const [videoCursor, setVideoCursor] = useState(1);
    const [videoLoaded, setVideoLoaded] = useState(AnnouncementInteraction);

    function handleItemClick(index) {
        setVideoCursor(index);
        setTimeout(() => {
            document.querySelector("#vidPlay").play();
        }, 50);
    }

    return (
        <>
            <div className="divider"></div>
            <section
            id="showcase"
            ref={prop.ref}
            className={"showcase" + (prop.InView ? " inview" : "")}
            >
                <TextTag text="Showcase" color="#8058F8" centered={true} />
        
                <p className="title">Learn More About Our Systems</p>
        
                <p className="f-center">
                    Watch how our systems work with these guide videos.
                </p>
        
                <br />
                <br />
                
                <div className="showcase-card">

                    <div className="media-container">

                        {/* <video controls>
                            <source src={videoLoaded} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                        
                        {videoCursor === 1 ? (
                            <video id='vidPlay' controls>
                                <source src={AnnouncementInteraction} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ):""}
                        {videoCursor === 2 ? (
                            <video id='vidPlay' controls>
                                <source src={EventAttendance} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ):""}
                        {videoCursor === 3 ? (
                            <video id='vidPlay' controls>
                                <source src={FamilyManagement} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ):""}
                        {videoCursor === 4 ? (
                            <video id='vidPlay' controls>
                                <source src={MinistryInteractions} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ):""}
                        {videoCursor === 5 ? (
                            <video id='vidPlay' controls>
                                <source src={Dashboard} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ):""}
                        {videoCursor === 6 ? (
                            <video id='vidPlay' controls>
                                <source src={MinistryGroups} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ):""}
                        {videoCursor === 7 ? (
                            <video id='vidPlay' controls>
                                <source src={EventManagement} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ):""}
                        {videoCursor === 8 ? (
                            <video id='vidPlay' controls>
                                <source src={MinistryManagement} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ):""}
                        {videoCursor === 9 ? (
                            <video id='vidPlay' controls>
                                <source src={PollManagement} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ):""}
                        {videoCursor === 10 ? (
                            <video id='vidPlay' controls>
                                <source src={PollResponse} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ):""}
                        {videoCursor === 11 ? (
                            <video id='vidPlay' controls>
                                <source src={ProfileEdit} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ):""}




                    </div>




                    <div className="list-container">
                        <div className={"list-item"+(videoCursor === 1 ? " active" : "")} onClick={() => handleItemClick(1)}>
                            <p className="item-title">Announcement Interactions</p>
                            <p className="item-user">Parishioner</p>
                            <p className="item-duration">0:56</p>
                        </div>
                        <div className={"list-item"+(videoCursor === 2 ? " active" : "")} onClick={() => handleItemClick(2)}>
                            <p className="item-title">Events & Attendance</p>
                            <p className="item-user">Parishioner</p>
                            <p className="item-duration">0:51</p>
                        </div>
                        <div className={"list-item"+(videoCursor === 3 ? " active" : "")} onClick={() => handleItemClick(3)}>
                            <p className="item-title">Family Management</p>
                            <p className="item-user">Parishioner</p>
                            <p className="item-duration">0:55</p>
                        </div>
                        <div className={"list-item"+(videoCursor === 4 ? " active" : "")} onClick={() => handleItemClick(4)}>
                            <p className="item-title">Ministry Interactions</p>
                            <p className="item-user">Parishioner</p>
                            <p className="item-duration">1:15</p>
                        </div>
                        <div className={"list-item"+(videoCursor === 5 ? " active" : "")} onClick={() => handleItemClick(5)}>
                            <p className="item-title">Dashboard</p>
                            <p className="item-user">Coordinator/Admin</p>
                            <p className="item-duration">0:37</p>
                        </div>
                        <div className={"list-item"+(videoCursor === 6 ? " active" : "")} onClick={() => handleItemClick(6)}>
                            <p className="item-title">Ministry Groups Management</p>
                            <p className="item-user">Coordinator</p>
                            <p className="item-duration">1:35</p>
                        </div>
                        <div className={"list-item"+(videoCursor === 7 ? " active" : "")} onClick={() => handleItemClick(7)}>
                            <p className="item-title">Event Scheduling & Management</p>
                            <p className="item-user">Coordinator/Admin/Volunteer</p>
                            <p className="item-duration">2:35</p>
                        </div>
                        <div className={"list-item"+(videoCursor === 8 ? " active" : "")} onClick={() => handleItemClick(8)}>
                            <p className="item-title">Ministry Management (Admin)</p>
                            <p className="item-user">Admin</p>
                            <p className="item-duration">1:17</p>
                        </div>
                        <div className={"list-item"+(videoCursor === 9 ? " active" : "")} onClick={() => handleItemClick(9)}>
                            <p className="item-title">Poll Management</p>
                            <p className="item-user">Coordinator/Admin</p>
                            <p className="item-duration">1:53</p>
                        </div>
                        <div className={"list-item"+(videoCursor === 10 ? " active" : "")} onClick={() => handleItemClick(10)}>
                            <p className="item-title">Poll Response Submission</p>
                            <p className="item-user">Parishioner</p>
                            <p className="item-duration">0:27</p>
                        </div>
                        <div className={"list-item"+(videoCursor === 11 ? " active" : "")} onClick={() => handleItemClick(11)}>
                            <p className="item-title">Profile</p>
                            <p className="item-user">General</p>
                            <p className="item-duration">0:36</p>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}