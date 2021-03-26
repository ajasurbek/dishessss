import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react'
import Logo from './containers/pages/Logo.jsx'
import Home from './containers/pages/Home'
import Circle from './containers/pages/Circle'
import Notifications from './containers/pages/Notifications'
import Statistic from './containers/pages/Statistic'
import Message from './containers/pages/Message'
import Settings from './containers/pages/Settings'
import Logout from './containers/pages/Logout'

import Sidebar from './containers/pages/Sidebar/Sidebar'
import './main.scss'
import './App.css'
function App() {
  const [activePage, setActivePage] = useState(window.location.pathname)

  return (
    <>
      <Router>
        <div className="app__main">
        <div className="app">
       <div>
       <Sidebar activePage={activePage} setActivePage={setActivePage} />
       </div>
         
          <div>
          <Switch>
            <Route exact path='/' component={Logo} />
            <Route  path='/Home' component={Home} />
            <Route  path='/Circle' component={Circle} />
            <Route  path='/Statistic' component={Statistic} />
            <Route  path='/Message' component={Message} />
            <Route  path='/Notifications' component={Notifications} />
            <Route  path='/Settings' component={Settings} />
            <Route  path='/Logout' component={Logout} />
          </Switch>
          </div>
        </div>
        </div>
      </Router>
    </>

  );
}

export default App;
