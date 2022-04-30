import "./App.scss";
import films from "./films.json";
import Sections from "./compenant/Sections";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <h1>Netflix</h1>
      </div>

      <div className="carroussel">
        {films.map((item, index1) => {
          console.log(item);
          return (
            <div className="category">
              <h2 key={index1}>{item.category} : </h2>
              <Sections img={item.images} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
