import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";

// Pages
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import Forms from "./pages/Forms";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import ThreadsPage from "./pages/ThreadsPage";

// Error Page
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <section>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:category/:id" element={<ThreadsPage />} />
            {/* Error Page */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
