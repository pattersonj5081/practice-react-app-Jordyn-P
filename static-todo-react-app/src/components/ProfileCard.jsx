function ProfileCard (props){
const {name, age, bio} = props
return(
<div>
<h2>
 Profile: 
</h2>
<p>
 name:{name} <br/>
 age:{age}<br/>
 bio:{bio}
</p>
</div>
)
}


export default ProfileCard