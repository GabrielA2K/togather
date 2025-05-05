
import { useInView } from 'react-intersection-observer'
import './ValuesCard.css'

export default function ValuesCard(prop) {
    const [inViewRef, inView] = useInView({threshold: 1})
    return (

        <div ref={inViewRef} className={"values-card block"+prop.id+(inView?' visible':'')}  style={{'--color': prop.color}}>
          <p className="letter-block f-center">{prop.title.charAt(0)}</p>
          <p className="value-name">{prop.title}</p>
          <p className="value-description">{prop.description}</p>
        </div>
    )
}