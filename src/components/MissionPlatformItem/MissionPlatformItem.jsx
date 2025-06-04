
import { Icon } from "@iconify/react/dist/iconify.js";
import { useInView } from "react-intersection-observer";

import "./MissionPlatformItem.css";

export default function MissionPlatformItem(prop) {
    const [itemRef, itemInView] = useInView({ threshold: 0.1 });
    return (
        <div ref={itemRef} className={"mission-item mobdesk"+(itemInView ? ' visible' : '')} style={{ "--color": prop.color, "--delay": prop.index * 80 +"ms" }} key={prop.index}>
            <div className="icon-wrapper">
                <Icon icon={prop.icon} width={24} />
            </div>
            <p className="heading">{prop.title}</p>
            <p className="description">{prop.description}</p>
        </div>
    )
}