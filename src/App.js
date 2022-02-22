
import "./App.css";
import Layout from "./Layout/Layout";
import PhotoGallary from "./Container/PhotoGallary";


function App(props) {
  return (
    <div className="App">
      {" "}
      <Layout>
        <PhotoGallary />
        </Layout>{" "}
    </div>
  );
}

export default App;
