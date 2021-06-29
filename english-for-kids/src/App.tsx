import { Switch, Route } from 'react-router-dom';
import Header from './components/header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Switch>
          {Object.values(['/', '/category1', '/category2'])
            .reverse() // dont work when '/' is first
            .map((path) => {
              const title = `Text for ${path}`;
              return (
                <Route key={path} path={path}>
                  <p>{title}</p>
                </Route>
              );
            })}
        </Switch>
      </div>
    </div>
  );
};

export default App;
