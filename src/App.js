import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Feed from "./feed/feed";
import './style/style.scss';


function App() {
  return (
    <div>
      <div className='app'>
        <Header />

        <div className='app-body'>
          <Sidebar />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;