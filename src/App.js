import './App.css';
import { useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Siteroutes from './components/Siteroutes';

function App() {

  useEffect(() => {
    const movetop = document.getElementById("movetop");

    const onScroll = () => {
      if (window.scrollY > 20) {
        movetop.style.display = "block";
      } else {
        movetop.style.display = "none";
      }
    };

    window.addEventListener("scroll", onScroll);

    // Dark/light mode toggle
    const checkbox = document.getElementById("checkbox");
    const toggleTheme = () => {
      if (checkbox?.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    };

    checkbox?.addEventListener("change", toggleTheme);
    document.documentElement.setAttribute("data-theme", "light");

    return () => {
      window.removeEventListener("scroll", onScroll);
      checkbox?.removeEventListener("change", toggleTheme);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Siteroutes/>
      <Footer />

      <button
        onClick={scrollToTop}
        id="movetop"
        title="Go to top"
        style={{ display: 'none' }}
      >
        <span className="fas fa-level-up-alt" aria-hidden="true"></span>
      </button>
    </>
  );
}

export default App;
