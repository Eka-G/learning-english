import { Switch, Route } from 'react-router-dom';
import { useStateContext } from './shared';
import { CARDS } from './constants';
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
          <Route path="/action-a">
            <CategoryPage key="Action (set A)" title="Action (set A)" cards={CARDS['Action (set A)']} />
          </Route>

          <Route path="/action-b">
            <CategoryPage key="Action (set B)" title="Action (set B)" cards={CARDS['Action (set B)']} />
          </Route>

          <Route path="/animal-a">
            <CategoryPage key="Animal (set A)" title="Animal (set A)" cards={CARDS['Animal (set A)']} />
          </Route>

          <Route path="/animal-b">
            <CategoryPage key="Animal (set B)" title="Animal (set B)" cards={CARDS['Animal (set B)']} />
          </Route>

          <Route path="/clothes">
            <CategoryPage key="Clothes" title="Clothes" cards={CARDS.Clothes} />
          </Route>

          <Route path="/emotions">
            <CategoryPage key="Emotions" title="Emotions" cards={CARDS.Emotions} />
          </Route>

          <Route path="/nature">
            <CategoryPage key="Nature" title="Nature" cards={CARDS.Nature} />
          </Route>

          <Route path="/space">
            <CategoryPage key="Space" title="Space" cards={CARDS.Space} />
          </Route>

          <Route path="/statistics">
            <StatisticsPage />
          </Route>

          <Route path="/categories">
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
