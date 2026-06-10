import './body.css';
import './macbook.jpg';
import './iphone6.jpg';
import './laptop.jpg';
import './woman.jpg';

const items = [
  {
    picture: require('./iphone6.jpg'),
    date: 'January 23, 2018',
    title: 'Iphone 6 Review',
    description:
      'Discover the latest camera reviews, featuring in-depth analysis and user experiences to help you choose the perfect camera for your needs.'
  },
  {
    picture: require('./laptop.jpg'),
    date: 'January 22, 2018',
    title: 'The Best Laptops 2018',
    description:
      'Discover the latest laptop reviews, featuring in-depth analysis and user experiences to help you choose the perfect laptop for your needs.'
  },
  {
    picture: require('./woman.jpg'),
    date: 'January 18, 2018',
    title: 'Honest Camera Reviews',
    description:
      'Discover the latest camera reviews, featuring in-depth analysis and user experiences to help you choose the perfect camera for your needs.'
  }
];

// Small Card component to render a single review item
function Card({ item }) {
  return (
    <div className="card">
      <img src={item.picture} alt="Camera" className="camera" />
      <p className="date">{item.date}</p>
      <h2 className="title">{item.title}</h2>
      <p className="description">{item.description}</p>
    </div>
  );
}

function Body() {
  return (
    <div className="body">
      <img src={require('./macbook.jpg')} alt="MacBook" className="macbook" />

      <h1 className="reviews">Latest Product Reviews</h1>

      <p className="content">
        Your one-stop destination for honest and unbiased reviews on cameras, computers, and gadgets. We
        provide in-depth analysis and user experiences to help you make informed decisions before purchasing your next tech product.
      </p>

      <div className="container">
        {/* Map over items to render cards */}
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      <div className="btn">
        <button className="reviews">View All Reviews</button>
      </div>
    </div>
  );
}

export default Body;