import './cards.css';
import mountain from './ODL.jpeg';
import tree from './tree.jpg';
import lake from './lake.jpg';
   let cardParms=[{
    img:mountain,
  daysAgo:'4 Days Ago',
  post:'Post 1',
  text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  posts:80,
  followers:803,
  following:106

   },
  
  {
    img:tree,
  daysAgo:'7 Days Ago',
  post:'Post 2',
  text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  posts:40,
  followers:102,
  following:68
   },
  {
    img:lake,
  daysAgo:'14 Days Ago',
  post:'Post 3',
  text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  posts:125,
  followers:56,
  following:876
   }];
   

function ProfileCard() {
// const {daysAgo,post,text}=cardParms[0];


return (
<div className="container">
  <div className="card1">
    <div className="card1-header">
       <img src={cardParms[0].img} alt="Profile" className='profile-pic' />
      </div>
     <div className='name'>{cardParms[0].daysAgo}</div>
     <h2 className='post'>{cardParms[0].post}</h2>
     <div className='text'>{cardParms[0].text}</div>
     <div className='stats'>
      <section>
        <div className='value'>{cardParms[0].posts} </div>
        <div className='label'>Posts</div>
       
      </section>
      <section>
        <div className='value'>{cardParms[0].followers}</div>
        <div className='label'>Followers</div>
        
      </section>
      <section>
        <div className='value'>{cardParms[0].following}</div>
        <div className='label'>Following</div>
      </section>
     </div>
       
    </div>
    
    <div className="card1">
    <div className="card1-header">
       <img src={cardParms[1].img} alt="Profile" className='profile-pic' />
      </div>
     <div className='name'>{cardParms[1].daysAgo}</div>
     <h2 className='post'>{cardParms[1].post}</h2>
     <div className='text'>{cardParms[1].text}</div>
     <div className='stats'>
      <section>
        <div className='value'>{cardParms[1].posts} </div>
        <div className='label'>Posts</div>
       
      </section>
      <section>
        <div className='value'>{cardParms[1].followers}</div>
        <div className='label'>Followers</div>
        
      </section>
      <section>
        <div className='value'>{cardParms[1].following}</div>
        <div className='label'>Following</div>
      </section>
     </div>
       
    </div>
     <div className="card1">
    <div className="card1-header">
       <img src={cardParms[2].img} alt="Profile" className='profile-pic' />
      </div>
     <div className='name'>{cardParms[2].daysAgo}</div>
     <h2 className='post'>{cardParms[2].post}</h2>
     <div className='text'>{cardParms[2].text}</div>
     <div className='stats'>
      <section>
        <div className='value'>{cardParms[2].posts} </div>
        <div className='label'>Posts</div>
       
      </section>
      <section>
        <div className='value'>{cardParms[2].followers}</div>
        <div className='label'>Followers</div>
        
      </section>
      <section>
        <div className='value'>{cardParms[2].following}</div>
        <div className='label'>Following</div>
      </section>
     </div>
       
    </div>
    

    

  </div>

)


}

export default ProfileCard;
