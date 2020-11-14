import RouteList from './router_list';
import { Switch, Route } from 'react-router-dom';

function IndexRoute() {
  return (
    <Switch>
      {RouteList.map((item, index) => {
        return (
          <Route
            path={item.path}
            exact={item.exact}
            render={item.render}
            key={index}
          />
        );
      })}
    </Switch>
  );
}

export default IndexRoute;
