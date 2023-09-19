import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./App.css"
import Home from "./page/Home";
export default function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <meta name="description" content="Pizza Shop" />
      </Helmet>
      <Nav />
      <Home/>
      <Footer />
    </>
  );
}
