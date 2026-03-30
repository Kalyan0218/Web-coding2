import './body.css';
import './macbook.jpg';
import './iphone6.jpg';
let items=[{
    picture:require('./iphone6.jpg'),
    date:'Januaryn23, 18',
    title:'Iphone 6 Review',
    description:'Discover the latest camera reviews, featuring in-depth analysis and user experiences to help you choose the perfect camera for your needs.'



},
{
    picture:require('./laptop.jpg'),
    date:'January 22, 2018',
    title:'The Best Laptops 2018',
    description:'Discover the latest laptop reviews, featuring in-depth analysis and user experiences to help you choose the perfect laptop for your needs.'
},
{
    picture:require('./woman.jpg'),
    date:'January 18, 2018',
    title:'Honest Camera Reviews',
    description:'Discover the latest camera reviews, featuring in-depth analysis and user experiences to help you choose the perfect camera for your needs.'
}]

function Body() {
  return (
    <div className="body">
        
            <img src={require('./macbook.jpg')} alt="MacBook" className="macbook"/>
           
        
      <h1 className='reviews'>Latest Product Reviews</h1>
     
      <p className='content'>Your one-stop destination for honest and unbiased reviews on cameras, computers, and gadgets. We provide in-depth analysis and user experiences to help you make informed decisions before purchasing your next tech product.</p>
    
    <div className="container">
        <div className="card">
            <img src={items[0].picture} alt="Camera" className="camera"/>
                <p1>{items[0].date}</p1>
                <h2>{items[0].title}</h2>
                <p>{items[0].description}</p>
                </div>

            
            <div className="card">
                 <img src={items[1].picture} alt="Camera" className="camera"/>
                <p1>{items[1].date}</p1>
                <h2>{items[1].title}</h2>
                <p>{items[1].description}</p>
            
            </div>
            <div className="card">
             <img src={items[2].picture} alt="Camera" className="camera"/>
                <p1>{items[2].date}</p1>
                <h2>{items[2].title}</h2>
                <p>{items[2].description}</p>
            </div>

        </div>
<div className='btn'>
        <button className='reviews'>View All Reviews</button>
    </div>
    </div>
  );
}

export default Body;