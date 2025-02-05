import { AuthProvider } from "./context/AuthContext"
import TopBar from "./components/topbar/Topbar";
import { Route, Router, Switch } from "react-router-dom";
import routes from "./Routes";
import history from "./history";
import axios from "axios";
import CategoryList from "./components/taxonomy_handler/CategoryList";

if (localStorage.logged_in === undefined) {
  localStorage.logged_in = false;
}

axios.defaults.baseURL = "http://127.0.0.1:8000/";
// axios.defaults.baseURL = "http://202.92.144.124:8000/";

// window.onScroll = (e) => console.log("scrolled!");

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <AuthProvider>
          <TopBar />
          <Switch>
            {routes.map((route, route_id) => {
              return (
                <Route
                  key={route_id}
                  path={route.path}
                  render={() => {
                    if (route.component === CategoryList) {
                      return (
                        <route.component
                          Category={
                            (route.name = route.name
                              .charAt(0)
                              .toUpperCase()
                              .concat(route.name.slice(1)))
                          }
                          Crumb={route.path}
                        />
                      );
                    } else {
                      return (
                        <route.component
                          Crumb={route.path}
                        />
                      );
                    }
                  }}
                />
              );
            })}
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
