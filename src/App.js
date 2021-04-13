import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import classes from "./App.module.scss";
import Trending from "./pages/Trending/Trending";
import Latest from "./pages/Latest/Latest";
import Upcoming from "./pages/Upcoming/Upcoming";
import Collection from "./pages/Collection/Collection";
import SingleMovie from "./pages/SingleMovie/SingleMovie";
import About from "./pages/About/About";
import * as actions from "./store/actions/index";
import { connect } from "react-redux";

function App(props) {
  const { watchlist, getPopular, getLatest, getUpcoming } = props;
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    getPopular();
    getUpcoming();
    getLatest();
  }, [watchlist, getPopular, getUpcoming, getLatest]);

  return (
    <div className={classes.App}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/movie/:id" component={SingleMovie} />
          <Route exact path="/new-releases" component={Latest} />
          <Route exact path="/coming-soon" component={Upcoming} />
          <Route exact path="/my-collection" component={Collection} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={Trending} />
          <Route exact path="/" component={Trending} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    watchlist: state.watchlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopular: () => dispatch(actions.getPopular()),
    getLatest: () => dispatch(actions.getLatest()),
    getUpcoming: () => dispatch(actions.getUpcoming()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
