import { Icon } from "@iconify/react/dist/iconify.js"

import TextTag from "../../components/TextTag/TextTag"

import "./Impact.css"

export default function Impact(prop) {

    return (
        <>
            <div className="divider"></div>
            <section ref={prop.ref} id="impact" className={"impact"}>
            <TextTag text="Our Impact" color="#FFB760" centered={true} />
    
            <p className="title">How We Make A Difference</p>
    
            <p className="f-center">
                At To Gather, we empower communities through long-term support made
                possible by our donors, volunteers, and partners helping them grow,
                connect, and embrace new opportunities.
            </p>
            <div className="news-container scrollable-x no-scrollbar">
                <div className="card-news" style={{ "--color": "#57CE77" }}>
                <div className="news-header">
                    <div className="title-container">
                    <Icon
                        icon="mingcute:love-line"
                        width={24}
                        color="#FFFFFF"
                        className="title-icon"
                    />
                    <p className="title">
                        One Year of A2K: A Journey of Digital Empowerment and Growth
                    </p>
                    </div>
                    <p className="description">
                    We expanded our core team with passionate full-time staff
                    committed to our shared vision.
                    </p>
                </div>
                <div className="news-body">
                    {/* <div className="news-poster" style={{'backgroundImage': 'url('+News1+')'}}>
                    </div> */}
                    <img
                    src={
                        "https://a2kgroup.org/images/News/A2K-Group-PH-first-year-anniversary.png"
                    }
                    alt=""
                    />
                    <div className="news-content">
                    <p className="news-heading">A2K Group’s Journey of Impact:</p>
                    <p className="news-preview">
                        From a Vision to a Movement: How One Year of Digital
                        Empowerment Sparked Growth, Innovation, and Community Impact
                    </p>
                    <button className="news-expand">
                        Read more
                        <Icon
                        icon="mingcute:arrow-right-line"
                        width={16}
                        className="expand-icon"
                        />
                    </button>
                    </div>
                </div>
                <p className="news-date">October 9, 2024</p>
                </div>
    
                <div className="card-news" style={{ "--color": "#FFB760" }}>
                <div className="news-header">
                    <div className="title-container">
                    <Icon
                        icon="mingcute:celebrate-line"
                        width={24}
                        color="#FFFFFF"
                        className="title-icon"
                    />
                    <p className="title">Celebrating Growth and New Beginnings</p>
                    </div>
                    <p className="description">
                    A heartfelt celebration for our OJT graduates from Holy Cross
                    College and Don Honorio Ventura State University as they embark
                    on their next chapter.
                    </p>
                </div>
                <div className="news-body">
                    {/* <div className="news-poster" style={{'backgroundImage': 'url('+News1+')'}}>
                    </div> */}
                    <img
                    src={"https://a2kgroup.org/images/News/OJT%20Graduates.jpg"}
                    alt=""
                    />
                    <div className="news-content">
                    <p className="news-heading">Honouring Our OJT Graduates</p>
                    <p className="news-preview">
                        Today, we celebrated the OJT graduates from Holy Cross College
                        and DHVSU, despite the rainy weather, marking the start of
                        their promising careers.
                    </p>
                    <button className="news-expand">
                        Read more
                        <Icon
                        icon="mingcute:arrow-right-line"
                        width={16}
                        className="expand-icon"
                        />
                    </button>
                    </div>
                </div>
                <p className="news-date">August 2, 2024</p>
                </div>
            </div>
            </section>
        </>
    )
}