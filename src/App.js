import './App.css';


const Card = ({images, children}) => {

  return (
    <div className="card">
      {images ? (<img src={images} className="card-img-top" alt="..."/>) : null}

      <div className="card-body">
       
        {children}

        <button className="btn btn-primary">Go somewhere</button >  
      </div>
      
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <Card  images={'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg'}> 

          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        </Card>

        <Card> 

          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

        </Card>
    </div>
  );
}

export default App;
