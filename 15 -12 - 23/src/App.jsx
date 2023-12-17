import CardList from "./components/cardList/CardList";
import "./App.css";
import NavBar from "./components/navbar/Navbar";
import Hero from "./components/Hero";

import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/footer/Footer";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?6",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?21",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?31",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?41",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?51",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?61",
      title: "Image card",
    },
  ];
  const imagesGallery = [
    {
      id: 1,
      img: "https://picsum.photos/100/100?11",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/100/100?22",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/100/100?33",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/100/100?44",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/100/100?55",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/100/100?66",
      title: "Image card",
    },
    {
      id: 7,
      img: "https://picsum.photos/100/100?77",
      title: "Image card",
    },
    {
      id: 8,
      img: "https://picsum.photos/100/100?88",
      title: "Image card",
    },
    {
      id: 9,
      img: "https://picsum.photos/100/100?99",
      title: "Image card",
    },
    {
      id: 10,
      img: "https://picsum.photos/100/100?10",
      title: "Image card",
    },
  ];
  return (
    <div className="App">
      <NavBar />
      <Hero
        text="Rome"
        ptext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias expedita suscipit ratione ea repellat velit.."
        imageUrl="https://picsum.photos/200/200?23"
      />
      <CardList
        cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
      />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />
      <Hero
        text="Tokyo"
        ptext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias expedita suscipit ratione ea repellat velit.."
        imageUrl="https://picsum.photos/200/200?20"
      />
      <Gallery GalleryObj={imagesGallery} />
      <Footer />
    </div>
  );
}

export default App;
