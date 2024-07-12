import { useState } from "react";
import initialData from "./assets/initialData.js";
import Header from "./components/Header.jsx";
import Grid from "./components/Grid.jsx";

function App() {
  const [data, setData] = useState(initialData);
  return (
    <>
      <Header data={data} />
      <Grid data={data} setData={setData} />
      
      <p>{data.allData[2]}</p>
    </>
  );
}

export default App;
