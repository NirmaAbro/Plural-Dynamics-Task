import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import img1 from "./images/undraw_happy_news_hxmt.svg";
import img2 from "./images/undraw_social_influencer_sgsv.svg";
import img3 from "./images/undraw_mention_6k5d.svg";
import SeconLastCom from "./components/SeconLastCom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree
        imgSrc={img1}
        title="Light, Fast & Powerful"
        description={
          <>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies <br />
            nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
            enim.
          </>
        }
      />
      <SectionThree
        imgSrc={img2}
        title="Another Title"
        description={
          <>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies <br />
            nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
            enim.
          </>
        }
      />
      <SectionThree
        imgSrc={img3}
        title="Another Title"
        description={
          <>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies <br />
            nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
            enim.
          </>
        }
      />
      <SeconLastCom />
      <Footer />
    </div>
  );
}

export default App;
