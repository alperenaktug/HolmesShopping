import "./App.css";
import Header from "./components/Header";
import PageContainer from "./container/PageContainer";

import RouterConfig from "./config/RouterConfig";

function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
