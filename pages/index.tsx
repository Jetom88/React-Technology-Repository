import { NextPage } from "next";
import Pagenation from "./Pagenation";
import VirtualScroll from "./VirtualScroll";

const Home: NextPage = () => {
  return (
    <>
      <Pagenation />
      {/* <VirtualScroll /> */}
    </>
  );
};

export default Home;
