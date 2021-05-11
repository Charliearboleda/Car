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

deleteCar = (event) =>{
  axios.delete('/cars/' + event.target.value).then(response => {
    this.setState({
      cars: response.data
    })
  })
}

updateCar = event => {
  event.preventDefault()
  const id = event.target.id
  axios.put('/cars/' + id, this.state).then(response => {
    this.setState({
      cars: response.data,
      Image: '',
      Make: '',
      Model: '',
      Year: '',
      Price: '',
      Mileage: '',
    })
  })
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
    <details>
    <summary>Create A Car</summary>
    <form onSubmit={this.handleSubmit}>
    <label html="Image"> Image</label>
    <input type="text" id="Image" onChange={this.handleChange} />
    <br></br>
    <label html="Make"> Make</label>
    <input type="text" id="Make" onChange={this.handleChange} />
    <br></br>
    <label html="Model"> Model</label>
    <input type="text" id="Model" onChange={this.handleChange} />
    <br></br>
    <label html="Year"> Year</label>
    <input type="text" id="Year" onChange={this.handleChange} />
    <br></br>
    <label html="Price"> Price</label>
    <input type="text" id="Price" onChange={this.handleChange} />
    <br></br>
    <label html="Mileage"> Mileage</label>
    <input type="text" id="Mileage" onChange={this.handleChange} />
    <br></br>
    <input type="submit" value="Create A Car" />
    </form>
    </details>
    <h2> List Of Available Vehicles</h2>
      <ul>
      {this.state.cars.map((cars)=>{
        return <li>
        <img src={cars.Image} alt={cars.Make} />

        <h3>Make: {cars.Make}</h3>
      <h3>Model: {cars.Model}</h3>
        <h3>Year: {cars.Year}</h3>
        <h3>Price: ${cars.Price}</h3>
      <h3>Mileage: {cars.Mileage}</h3>
      <button value={cars._id} onClick={this.deleteCar}>
      Remove Car If Sold
      </button>
      <details>
<summary>Edit This Vehicle</summary>
<form id={cars._id} onSubmit={this.updateCar}>
<label htmlFor="Image">Image</label>
<input type="text" id="Image" onChange={this.handleChange} />
<br></br>
<label htmlFor="Make">Make</label>
<input type="text" id="Make" onChange={this.handleChange} />
<br></br>
<label htmlFor="Model">Model</label>
<input type="text" id="Model" onChange={this.handleChange} />
<br></br>
<label htmlFor="Year">Year</label>
<input type="text" id="Year" onChange={this.handleChange} />
<br></br>
<label htmlFor="Price">Price</label>
<input type="text" id="Price" onChange={this.handleChange} />
<br></br>
<label htmlFor="Mileage">Mileage</label>
<input type="text" id="Mileage" onChange={this.handleChange} />
<br></br>
<input type="submit" value=" Update Vehicle" />
</form>
      </details> <br></br>
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
