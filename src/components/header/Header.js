import headerImg from '../../icons_assets/restauranfood.jpg'
import './Header.css'

const Header = () => {
  return (
    <header className="header">

        <div>
          
          <div>
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          </div>

          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

          <button><a href='/'>Reserve a Table</a></button>
        </div>

        <img src={headerImg}/>



    </header>
  )
}

export default Header