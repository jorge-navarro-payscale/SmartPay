import { useState } from "react";
import Pricing from './Pricing';
import TextField from '@mui/material/TextField';

function App() {
  const [name, setName] = useState("Ihechikara");
  const changeName = () => {
    setName("Chikara");
  };
  const handleSubmit = (e) => {
    alert('it works!');
    e.preventDefault();
  };
  const handleChange = (e) => {
    setName(e.target.value)
  };

  return (
    <div>
      <Pricing />
      {/* <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        {name}
      </div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    </div>
  );
}

export default App;