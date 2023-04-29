import { Outlet } from "react-router-dom";
import Nav from "components/Nav";
import Footer from "components/Footer";
import { AuthProvider } from "contexts/AuthContext";
import AuthSelect from "components/AuthSelect";
import GlobalStyle from "components/GlobalStyle";

function App() {
  return (
    <AuthProvider defalutValue="false">
      <GlobalStyle />
      <Nav />
      <AuthSelect />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
}

export default App;
