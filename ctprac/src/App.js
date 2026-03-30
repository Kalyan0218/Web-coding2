
import './App.css';
import lake from './lake.jpg';

let cardParms=[{
 cardheader:'Graphic Design',
  postedBy:'Posted by: John Doe',
  date:'Date: 2024-06-01',
  content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  picture: lake,


},
{  cardheader:'Web Development',
  postedBy:'Posted by: Jane Smith',
  date:'Date: 2024-06-02',
  content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  picture:'https://via.placeholder.com/150'},

  { cardheader:'Mobile Development',
    postedBy:'Posted by: Bob Johnson',
    date:'Date: 2024-06-03',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture:'https://via.placeholder.com/150' },
    {
      cardheader:'Data Science',
      postedBy:'Posted by: Alice Williams',
      date:'Date: 2024-06-04',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      picture:'https://via.placeholder.com/150'
    }
]


function App() {


  return (
 <div className="App">
  <div className="card">
    <section className="card-header">{cardParms[0].cardheader}</section>
 
  <section className="posted-by">
    {cardParms[0].postedBy}
    </section>
    <section className="date">
      {cardParms[0].date}
      </section>
    <section className="content">
      {cardParms[0].content}
      </section>
      <section className="picture">
        <img src={cardParms[0].picture} alt="Placeholder" />
        </section>



    </div>
    
  
  </div>
  
) 
}

export default App;

  