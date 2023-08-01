// import Button from 'react-bootstrap/Button';
import { FaLandmark , FaPlus , FaStar , FaDollarSign } from "react-icons/fa";
import './App.css'

function App(props) {
  return (
    <div className='w-100 h-100 d-flex align-items-center'>
      <div className='w-100 h-auto ps-5 pe-5'>
        <div className="cart">
          <img className='w-100 h-auto' src={props.img} alt="" />
          
          <p className="paragraf">{props.Paragraf}</p>
          
          <p className="location"><FaLandmark className="mark1"/> {props.Location}</p>
          
          <p className="View"><FaStar className="mark2"/> {props.View}</p>
          
          <div className="d-flex mt-4">
            <div className="w-50 d-flex align-items-center">
              <button className="border-0 bg-transparent"><FaPlus className="mark3"/></button>
            </div>

            <div className="w-50">
              <div className="d-flex">
                <h6 className="OriginalPrice">{props.OriginalPrice}</h6>
                <h6 className="discount">{props.Discount}</h6>
              </div>

              <div className="d-flex">
                <h5>{props.Price}<FaDollarSign/></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
