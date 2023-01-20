import { Col } from "react-bootstrap";

const Card = (props) => {
  return (
    <Col>
      <div className = "card-imgbx col-3" style={{width: "450px"}}>
        <div>
          <img src = {props.data.imgUrl} style={{borderRadius: "20px"}} className="img-hover"/>
        </div>
        <div className = "card-txt">
          <div className="card-text">
            <h1>{ props.data.title }</h1>
          </div>
          <div>
            <p>{ props.data.description }</p>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default Card