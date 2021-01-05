import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

function App() {
  return (
    <div>
      {/* <h1> Facebook-Clone </h1> */}
      <div className='app'>
        <Header />

        <div className='app-body'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;