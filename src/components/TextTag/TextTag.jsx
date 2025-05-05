


export default function TextTag(prop) {

    return (

        <p className={"tag "+(prop.centered? 'f-center' : "")} style={{'--color': prop.color}}>
          {prop.text}
        </p>
    )
}
  