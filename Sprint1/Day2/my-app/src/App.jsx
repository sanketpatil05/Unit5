import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';

function App() {
  const list =[
    {
      "heading":"Mobile operating system",
      "brand":["Andriod","Blackberry","iphone","WindowsPhone"]
    },{
      "heading":"Mobile Manufactures",
      "brand":["Samsung","HTC","Micromax","Apple"]
    }
  ]
  return <div>
    {list.map((el)=>(
      <Component data={el}/>
    ))}

  </div>
  function Component({data}){
    return (
      <div>
        <h1>{data['heading']}</h1>
      {data['brand'].map((el)=>(
        <li>{el}</li>
      ))}

      </div>
    )
  }

  return 
}

export default App;
