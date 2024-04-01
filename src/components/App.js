import { connect} from "react-redux";
import { useEffect, Fragment  } from "react";
import { Route, Routes } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <Fragment>
        
        <LoadingBar />
        <div className="container">
          <Nav/>
          {
            props.loading === true ? null :(
              <Routes>
                <Route path="/" exact element ={<Dashboard/>}/>
                <Route path="/tweet/:id" element={<TweetPage/>}/>
                <Route path="/new" element={<NewTweet/>}/>
              </Routes>
            )
          }
        </div>
      </Fragment>

      
      
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
