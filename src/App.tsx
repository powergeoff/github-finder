import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import GithubProvider from "./context/github/GithubContext";
import LoadingProvider from "./context/loading/LoadingContext";
import AlertProvider from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import UserPage from "./pages/UserPage";
import UserProvider from "./context/user/UserContext";


const App = () => {
  return (
    <GithubProvider>
      <LoadingProvider>
        <AlertProvider>
          <UserProvider>
            <Router>
              <div className="flex flex-col justify-between h-screen">
                <Navbar title="Github Finder" />

                <main className="container mx-auto px-3 pb-12">
                  <Alert />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/user/:login' element={<UserPage />} />
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path='/*' element={<NotFound />} />
                  </Routes>
                </main>

                <Footer />
              </div>
            </Router>
          </UserProvider>
        </AlertProvider>
      </LoadingProvider>
    </GithubProvider>
  );
}

export default App;