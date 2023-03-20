import { Provider } from "react-redux";
import store from "./app/store.js";
import Redux from "./components/Redux"

function App() {
  return (
  	<div>
  		<Provider store={store}> 
  		   <Redux />
  		</Provider>
  	</div>
  );
}

export default App;
