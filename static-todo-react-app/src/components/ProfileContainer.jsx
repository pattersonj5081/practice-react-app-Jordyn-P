import ProfileCard from "./ProfileCard"

function ProfileContainer() {
  
     const profiles= [
        {name:"Garret", 
         age: 22, 
         bio: "Live, Laugh, Love!<3"
         }, 
       {name:"Cole", 
         age: 24,
         bio: "Whats funnier than 24? oh youkno."
         }, 
        {name:"Jordyn", 
         age: 25,
         bio: "I am a June baby!"
         }
                     ]
    const filledContainer = profiles.map(profile =>ProfileCard(profile));
     return(
        <div>
        {filledContainer}
        </div>
           )
                    }
    

    export default ProfileContainer