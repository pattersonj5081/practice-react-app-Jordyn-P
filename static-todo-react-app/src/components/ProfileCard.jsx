function ProfileCard (props){
const {name, age, bio} = props
return(
<div >
<h2 className="flex-container">
 Profile: 
</h2>
<p className="flex-container">
 name:{name} <br/>
 age:{age}<br/>
 bio:{bio}
</p>
</div>
)
}


export default ProfileCard