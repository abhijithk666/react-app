
const Card = (props) => {
  return (
  
      <div class="col-lg-4">
        <div className = "card-imgbx">
          <div>
            <img class="img-fluid" src = {props.data.imgUrl} className="img-hover" alt="card"/>
          </div>
          <div class="d-flex p-3">
            <div className="small-box">
              <div>{ props.data.smallTxt }</div>
            </div>
          </div>
          <div className = "card-txt">
            <div className="card-text">
              <h2>{ props.data.title }</h2>
            </div>
            <div>
              <p>{ props.data.description }</p>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Card