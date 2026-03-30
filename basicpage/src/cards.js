import './cards.css';
import mountain from './ODL.jpeg';
import tree from './tree.jpg';
import lake from './lake.jpg';
    

function ProfileCard() {
return (
<div className="container">
  <div className="card1">
    <div className="card1-header">
       <img src={mountain} alt="Profile" className='profile-pic' />
      </div>
     <div className='name'>4 Days Ago</div>
     <h2 className='post'>Post 1</h2>
     <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
     <div className='stats'>
      <section>
        <div className='value'>80 </div>
        <div className='label'>Posts</div>
       
      </section>
      <section>
        <div className='value'>803</div>
        <div className='label'>Followers</div>
        
      </section>
      <section>
        <div className='value'>104</div>
        <div className='label'>Following</div>
      </section>
     </div>
       
    </div>
    
    <div className="card1">
    <div className="card1-header">
       <img src={tree} alt="Profile" className='profile-pic' />
      </div>
     <div className='name'>7 Days Ago</div>
     <h2 className='post'>Post 2</h2>
     <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
     <div className='stats'>
      <section>
        <div className='value'>40 </div>
        <div className='label'>Posts</div>
       
      </section>
      <section>
        <div className='value'>102</div>
        <div className='label'>Followers</div>
        
      </section>
      <section>
        <div className='value'>68</div>
        <div className='label'>Following</div>
      </section>
     </div>
       
    </div>
     <div className="card1">
    <div className="card1-header">
       <img src={lake} alt="Profile" className='profile-pic' />
      </div>
     <div className='name'>14 Days Ago</div>
     <h2 className='post'>Post 3</h2>
     <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
     <div className='stats'>
      <section>
        <div className='value'>125 </div>
        <div className='label'>Posts</div>
       
      </section>
      <section>
        <div className='value'>56</div>
        <div className='label'>Followers</div>
        
      </section>
      <section>
        <div className='value'>876</div>
        <div className='label'>Following</div>
      </section>
     </div>
       
    </div>
    

    

  </div>

)


}

export default ProfileCard;
