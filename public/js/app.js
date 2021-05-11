class Car extends React.Component {
state = {
  Image: "",
  Make: "",
  Model: "",
  Year: "",
  Price: "",
  Mileage:"",
  cars: []
}

handleChange = (event) => {
  this.setState({[event.target.id]: event.target.value })
}

handleSubmit = (event) =>{
  event.preventDefault()
  axios.post('/cars', this.state).then(response =>
this.setState({cars: response.data, Image:"", Make: "", Model: "", Year: "", Price: "", Mileage: ""})
  )
}

componentDidMount = () =>{
  axios.get('/cars').then(response => {
    this.setState({
      cars: response.data
    })
  })
}

  render = () =>{
    return <div>
    <h3>Create A Car</h3>
    <form>
    <label html="Image"> Image</label>
    <input type="text" id="Image" />
    <br></br>
    <label html="Make"> Make</label>
    <input type="text" id="Make" />
    <br></br>
    <label html="Model"> Model</label>
    <input type="text" id="Model" />
    <br></br>
    <label html="Year"> Year</label>
    <input type="text" id="Year" />
    <br></br>
    <label html="Price"> Price</label>
    <input type="text" id="Price" />
    <br></br>
    <label html="Mileage"> Mileage</label>
    <input type="text" id="Mileage" />
    <br></br>
    <input type="submit" value="Create A Car" />
    </form>

    <h2> List Of Available Vehicles</h2>
      <ul>
      {this.state.cars.map((cars)=>{
        return <li>
        <img src={cars.Image} alt={cars.Make} />

        <h3>Make: {cars.Make}</h3>
      <h3>Model: {cars.Model}</h3>
        <h3>Year: {cars.Year}</h3>
        <h3>Price: {cars.Price}</h3>
      <h3>Mileage: {cars.Mileage}</h3>
        </li>
      })}
      </ul>

    </div>
  }
}

ReactDOM.render(
  <Car></Car>,
  document.querySelector('main')
)
