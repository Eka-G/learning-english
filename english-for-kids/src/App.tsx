import { Switch, Route } from 'react-router-dom';
import { useStateContext } from './shared';
import Header from './components/header';
import AdminHeader from './components/admin-header';
import Footer from './components/footer';
import MainPage from './pages/main';
import CategoryPage from './pages/category-page';
import StatisticsPage from './pages/statistics';
import AdminCategoryPage from './pages/admin-category-page';
import AdminWordsPage from './pages/admin-words-page';

const App = () => {
  const { state } = useStateContext();

  return (
    <div className="App">
      {!state.isLogin && <Header />}
      {state.isLogin && <AdminHeader />}
      <div className="content">
        <Switch>
          <Route path="/categories/:name">
            <CategoryPage />
          </Route>

          <Route path="/statistics">
            <StatisticsPage />
          </Route>

          <Route exact path="/admin/categories">
            <AdminCategoryPage />
          </Route>

          <Route path="/admin/categories/:name">
            <AdminWordsPage />
          </Route>

          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default App;
