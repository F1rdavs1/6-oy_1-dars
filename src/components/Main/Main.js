import Hero from "../Hero/Hero";
import HomePage from "../HomePage/HomePage";
import Case from "../Case/Case";
import Supportive from "../Supportive/Supportive";

const Main = () => {
  return (
    <main className="site-main">
      <Hero />
      <HomePage/>
      <Case/>
      <Supportive/>
    </main>
  );
};

export default Main;
