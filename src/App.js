import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
//引入新建的组件
import Home from './components/Home';





function App() {
	return(
		<Router>
      <div>
    
          <Route exact path="/" component={Home} />          

      </div>
    </Router>
	);
}
export default App;