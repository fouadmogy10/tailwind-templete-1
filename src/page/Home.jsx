import React from "react";
import Bannar from "../components/Bannar";
import Featured from "../components/Featured";
import About from "../components/About";
import About2 from "../components/About2";
import Pricing from "../components/Pricing";
import fashon from "../assets/img/fashion.png";
import fashon2 from "../assets/img/bannar2.png";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div id="overview">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Prefect SEO" />
        <meta charSet="UTF-8" />
      </Helmet>
      <section className="padding-y">
      <Bannar
        title={"Develop your skills "}
        title2="without diligence"
        par={
          "A good example of a paragraph contains a topic sentence, details and  a conclusion. There are many different kinds of animals that live in China."
        }
        img={fashon}
        btnTit={"Get Started"}
        btnTit2={"Discount"}
      />
      </section>
      <Featured />
      <section className="max-container padding-y">
        <About />
      </section>
      <section className="max-container">
        <About2 />
      </section>
      <Pricing />
      <section className="pb-10">
        <Bannar
          title={"Each student an share their"}
          title2={"discount code for friends"}
          par={
            "A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"
          }
          img={fashon2}
          btnTit={"I have a code"}
        />
      </section>
    </div>
  );
};

export default Home;
