import Carousel from "../../components/Carousel";
import Campaigns from "../../components/Campaigns";
import MenuWrapper from "../../components/product/MenuWrapper";
import About from "../../components/About";
import BookTable from "../../components/BookTable";
import Reviews from "../../components/Reviews";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <BookTable />
      <Reviews />
    </div>
  );
};

export default Index;
