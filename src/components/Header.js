import headerImg from '../icons_assets/restauranfood.jpg'

const Header = () => {
  return (
    <header className="header">

        <div>
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>lorem lorem lorem lorem loremlorem lorem lorem lorem lorem</p>

          <button><a href='/'>Reserve a Table</a></button>
        </div>

        <img src={headerImg}/>



    </header>
  )
}

export default Header