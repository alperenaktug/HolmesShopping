import "./App.css";
import Header from "./components/Header";
import PageContainer from "./container/PageContainer";
import ProductList from "./components/productList";

function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <ProductList />
      </PageContainer>
    </div>
  );
}

export default App;
