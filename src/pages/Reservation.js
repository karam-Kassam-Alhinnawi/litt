import { useNavigate } from "react-router-dom"

const Reservation = () => {
  const navigate = useNavigate();

  return (
    <div className="reserve">
       <div className="page-name">
        <span>Table reservation</span>
       </div>

      <form>
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <label>Date</label>
          <input type='date' required/>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <label>Time</label>
          <select>
            <option>10:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
          </select>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <label>Number Of Guests</label>
          <input type='number' required placeholder="10"/>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <label>Occasion</label>
          <select>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <button type='submit' onClick={() => navigate('/reservemade')}>Make Your Reservation</button>


      </form>

    </div>
  )
}

export default Reservation