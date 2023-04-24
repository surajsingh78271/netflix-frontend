import HomeScreen from "./Components/Pages/HomeScreen";
import Login from "./Components/Pages/Login";
import {useSelector} from 'react-redux'
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  // const dispatch = useDispatch();
  return (
    <div className="App">
      {
       !user?(<Login />):(<HomeScreen />)
      }
     
      
    </div>
  );
}

export default App;
