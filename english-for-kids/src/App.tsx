import { Switch } from 'react-router-dom';
import Header from './components/header';
import MainPage from './pages/main';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Switch>
          {Object.values(['/', '/category1', '/category2'])
            .reverse() // dont work when '/' is first
            .map((path) => {
              return <MainPage />;
            })}
        </Switch>
      </div>
    </div>
  );
};

export default App;
