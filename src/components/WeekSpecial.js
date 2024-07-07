import cardImgOne from '../icons_assets/greek salad.jpg';
import cardImgTwo from '../icons_assets/bruchetta.svg';
import cardImgThree from '../icons_assets/lemon dessert.jpg';

const card = [
    {img: cardImgOne, name:'greek salad', price: '12.99', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam magnam nihil dignissimos id fugit, omnis ad aperiam harum magni!'},
    {img: cardImgTwo, name:'Lemon salad', price: '30.99', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam magnam nihil dignissimos id fugit, omnis ad aperiam harum magni!'},
    {img: cardImgThree, name:'Lemon Dessert', price: '5.99', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam magnam nihil dignissimos id fugit, omnis ad aperiam harum magni!'},
]

const WeekSpecial = () => {
  return (
    <div className="week-special" style={{marginTop: '260px'}}>

       <div className='week-special-details'>
        <h2>This Week Special</h2>
        <button>Explore Menu</button>
       </div>

       <div className="cards">

     
      {card.map((detail) => (
        <div className="card">
            <img src={detail.img} alt={detail.name} />

            <div className='card-details'>
            <div className='card-price-name'>
            <h3>{detail.name}</h3>
            <p>{detail.price}</p>
            </div>

            <p>{detail.desc}</p>
  
            <button>Order Online</button>

            </div>

        </div>
      ))}

       </div>

    </div>
  )
}

export default WeekSpecial