import Event from './Event'

const Schedule = () => {
    return (
        <div className="Schedule">
            <Event event='Workout' 
            time='6:30 AM - 8:30 AM' 
            color="black" 
            streak="3"
            description="Leg Day!"
            image = "/images/SPAC NU.jpg"/>

            <Event event='Career Fair' 
            time='12:00 PM - 4:00 PM' 
            color="grey" 
            streak="0"
            description="Talk to 5 recruiters."
            image = "/images/Career Fair.jpg"/>

            <Event event='Dinner' 
            time='5:00 PM - 5:30 PM' 
            color="grey" 
            streak="0"
            description="Get a minimum of 140g Protein."
            image = "/images/Allison Dining Hall.png"/>

            <Event event='Study' 
            time='6:00 PM - 8:00 PM' 
            color="purple" 
            streak="5"
            description="Study for Engineering Analysis 3."
            image = "/images/Deering Meadow.png"/>

            <Event event='Entertainment' 
            time='8:00 PM - 11:00 PM' 
            color="gold" 
            streak="6"
            description="Watch latest One Piece episode"
            image = "/images/Gear 5.jpg"/>

            <Event event='Sleep' 
            time='8:00 PM - 11:00 PM' 
            color="gold" 
            streak="6"
            description="6-7 hours minimum"
            image = "/images/Kemper.jpg"/>

            <Event event='CS212' 
            time='9:30 AM - 11:00 AM' 
            color="grey" 
            streak="14"
            description="Try to pay attention."
            image = "/images/Logic.jpg"/>

            <Event event='EA3' 
            time='11:00 AM - 11:50 AM' 
            color="black" 
            streak="8"
            description="Lock in."
            image = "/images/Electrical.jpg"/>

            <Event event='AI' 
            time='2:00 PM - 3:20 PM' 
            color="purple" 
            streak="12"
            description="Can he stop yapping."
            image = "/images/AI.jpg"/>

            <Event event='Cognitive Science' 
            time='3:30 PM - 5:00 PM' 
            color="grey" 
            streak="13"
            description="Soothing Class!"
            image = "/images/Primates.jpg"/>

        </div>



    )
}

export default Schedule;