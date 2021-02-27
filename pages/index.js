import { attributes, react as HomeContent } from "../content/home.md";

const Homepage = () => {
  const { title, cats } = attributes;
  return (
    <>
      <div className="grid grid-cols-3 gap-1 md:gap-3 lg:gap-6">
        <img
          className="rounded-md shadow-md hover:opacity-30"
          src="https://placekitten.com/300/400"
        ></img>
        <img
          className="rounded-md shadow-md hover:opacity-30"
          src="https://placekitten.com/300/400"
        ></img>
        <img
          className="rounded-md shadow-md hover:opacity-30"
          src="https://placekitten.com/300/400"
        ></img>
      </div>
      <div className="mt-8 prose">
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
};

export default Homepage;
