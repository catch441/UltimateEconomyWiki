import Header from './components/header.js';
import HeaderNav from './components/headerNav.js';
import Footer from './components/footer.js';
import PluginInfo from './components/pluginInfo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/about">
            <Header />
            <HeaderNav />
            <Footer />
          </Route>
          <Route path="/faq">
            <Header />
            <HeaderNav />
            <Footer />
          </Route>
          <Route path="/change-log">
            <Header />
            <HeaderNav />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <HeaderNav />
            <PluginInfo />
            <Footer />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
