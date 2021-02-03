import Header from './components/header.js';
import HeaderNav from './components/headerNav.js';
import Footer from './components/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/job-system">
            <Header />
            <HeaderNav />
            <Footer />
          </Route>
          <Route path="/shop-system">
            <Header />
            <HeaderNav />
            <Footer />
          </Route>
          <Route path="/town-system">
            <Header />
            <HeaderNav />
            <Footer />
          </Route>
          <Route path="/player-features">
            <Header />
            <HeaderNav />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <HeaderNav />
            <Footer />
          </Route>
          <Route path="/download">
            <Header />
            <HeaderNav />
            <Footer />
          </Route>
          <Route path="/plugin-info">
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
            <Footer />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
