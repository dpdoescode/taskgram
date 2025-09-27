const Event = (props) => {
    return (
        <div className={'Event '  + props.color}>
            <h2>{props.event}</h2>
            <h3>{props.time}</h3>
            <p>Completion Streak: {props.streak} </p>
            <p>Description: {props.description}</p>
            <img src={props.image} />
        </div>



    )
}

export default Event;