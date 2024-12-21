import Carousel from "../components/Carousel";

function Home() {
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Welcome to NeWorld</h1>
      <p className="text-center mb-5 mt-5">
        NeWorld is an interactive platform designed to explore and discover
        detailed information about every country in the world. With a clean and
        easy-to-navigate interface, users can access key facts about each
        nation, including population, area, capital cities, languages, and much
        more. Whether you're a geography enthusiast, a traveler, or just curious
        about global affairs, NeWorld offers valuable insights to help you learn
        about the diverse cultures, histories, and geographies of countries
        around the world. Explore, discover, and expand your knowledge of the
        world with NeWorld.
      </p>
      <Carousel />
      <h2 className="text-center mt-5 mb-2"> Features</h2>
      <ul className="text-center">
        <li>Home</li>
        <p>
          The home feature welcomes users to NeWorld, offering a quick overview
          of the website’s purpose. It features easy navigation to explore the
          world’s countries and their detailed information, along with links to
          other important sections.
        </p>
        <li>Countries</li>
        <p>
          The countries feature is the heart of NeWorld, where users can browse
          through a list of all the countries in the world. Each country’s page
          includes essential information such as population, capital city, area,
          languages spoken, and more, helping users learn about each nation’s
          unique attributes.
        </p>
        <li>About</li>
        <p>
          The about feature is place to showcase new world that author want to
          create, expressing a new idea alongside with its related information.
        </p>
      </ul>
    </div>
  );
}

export default Home;
