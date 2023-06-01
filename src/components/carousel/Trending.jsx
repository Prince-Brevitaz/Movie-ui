import "./trending.css";

function Trending() {
  return (
    <div
      className="relative w-full -top-48 md:-top-96 mt-10
    bg-gradient-to-b from-transparent to-95%"
    >
      <div className="relative  ml-4 md:ml-16">
        <p
          className="
          text-white
          text-3xl 
          md:text-4xl 
          h-full 
          w-[90%] 
          lg:text-4xl 
          font-bold 
          drop-shadow-xl"
        >
          Top 10 in prince Netflix
        </p>

        <div className="relative">
          <ul className="flex list-none w-full mt-5 h-52 lg:h-[29rem] overflow-x-auto overflow-y-visible">
            <li className="item top-picks__item">
              <a
                className="item__card"
                // href="https://codepen.io/jh3y/pen/LYNZwGm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" />
                <span className="top-0 right-4">
                  Spider-Man: Across the Spider-Verse
                </span>
              </a>
            </li>

            <li className="item top-picks__item">
              <a
                className="item__card"
                href="https://codepen.io/jh3y/pen/abzeaWJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://assets.codepen.io/605876/newtons-lightbulbs.png" />
                <span>Newton Light Bulbs</span>
              </a>
            </li>

            <li className="item top-picks__item">
              <a
                className="item__card"
                href="https://codepen.io/jh3y/pen/LYNZwGm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://assets.codepen.io/605876/impossible-checkbox.png" />
                <span className="top-0 right-4">Impossible Checkbox</span>
              </a>
            </li>
            <li className="item top-picks__item">
              <a
                className="item__card"
                href="https://codepen.io/jh3y/pen/LYNZwGm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://assets.codepen.io/605876/impossible-checkbox.png" />
                <span className="top-0 right-4">Impossible Checkbox</span>
              </a>
            </li>
            <li className="item top-picks__item">
              <a
                className="item__card"
                href="https://codepen.io/jh3y/pen/LYNZwGm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://assets.codepen.io/605876/impossible-checkbox.png" />
                <span className="top-0 right-4">Impossible Checkbox</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Trending;
