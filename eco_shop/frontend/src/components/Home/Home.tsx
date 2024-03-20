import video from "./vi.mp4";
import red from "./a90a2a3f-ba7f-444f-ad78-57995f77d04e.gif";
import yellow from "./_.gif";
import green from "./Clothes Cashmere GIF by Everlane - Find & Share on GIPHY (1).gif";
import first from "./1.png";
import second from "./2.png";
import third from "./3.png";
import four from "./4.png";
import five from "./5.png";
import six from "./6.png";
// import os from "./Grafika.jpg";
import p from "./photo.jpeg";
import rec2 from "./Yarrah.gif";
import rec1 from "./Happy Good Morning Sticker by Katie Thierjung _ The Uncommon Place for iOS & Android _ GIPHY.gif";
import rec3 from "./flower Sticker - Find & Share on GIPHY.gif";

import "./home.css";
import "../../index.css";

import Footer from "./Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <video autoPlay muted loop className="video-background">
        <source src={video} type="video/mp4" />
      </video>

      <div className="cont-1">
        <div className="contq1">
          <div className="imagecontainer">
            <img src={p} alt="Your Image" />
            {/* <img src={p} alt="Your Image" /> */}
          </div>

          <div className="textcontainer">
            <h1 className="text-01"> SwapStyle </h1>
            <p className="textp">
              это сайт, где мы не просто следим за стилем, но и помогаем
              природе, давая второй шанс вещам. Мы стараемся изменить взгляд на
              покупки, делая их более экологичными.
            </p>
          </div>
        </div>
      </div>
      <div className="contq">
        <div className="text-container1">
          <p className="text-01">Важно понимать</p>
          <p className="osnov">
            Материалы в модной индустрии требуют внимания к переработке. Ресайкл
            – ключевое решение, уменьшающее экологическое воздействие и
            содействующее устойчивости. Поддерживая ресайкл, мы сокращаем
            потребность в новых ресурсах и снижаем вред окружающей среде.
          </p>
        </div>

        <div className="image-container">
          <div className="image-row">
            <img src={first} alt="Image 1" />
            <img src={second} alt="Image 2" />
            <img src={third} alt="Image 3" />
          </div>

          <div className="image-row">
            <img src={four} alt="Image 4" />
            <img src={five} alt="Image 5" />
            <img src={six} alt="Image 6" />
          </div>
        </div>
      </div>

      <div className="video-container11">
        <div className="video-item">
          <img src={rec1} className="vi" width="580" height="315" />
          <p className="text11">Вторичная мода</p>
          <p className="pp">
            Вторичная одежда – это наша история стиля, переписываемая каждый
            день. Присоединяйтесь к зеленому стилю – путешествие во времени, где
            воспоминания и стиль встречаются.
          </p>
        </div>

        <div className="video-item">
          <img src={rec2} className="vi" width="600" height="315" />
          <p className="text11"> Мода с заботой</p>
          <p className="pp">
            В гардеробе каждая вещь – словно воспоминание, а ресайкл – ключ к
            сохранению их смысла. Выберите моду с пользой для планеты, где
            каждый наряд – шаг к устойчивости и заботе о мире вокруг.
          </p>
        </div>

        <div className="video-item">
          <img src={rec3} className="vi" width="560" height="315" />
          <p className="text11">Живой стиль</p>
          <p className="pp">
            В ресайкле каждая вещь превращается в отдельную главу нашего
            стилевого дневника. Давайте сделаем свой стиль вдохновляющим и
            заботливым, добавляя краски в наш модный хроникон..
          </p>
        </div>
      </div>

      <div className="cont-2">
        <div className="name">
          <div className="number-01">
            <p className="n-01">01</p>
          </div>
          <div className="cont-02">
            {/* <div className="context-2"> */}
            <p className="text-01">Purple</p>
            {/* </div> */}
            <p className="osnov">
              Фиолетовый цвет символизирует сложноперерабатываемые товары,
              <br />
              подчеркивая, что их лучше всего выбирать для повторного
              использования
              <br /> и уменьшения общего воздействия на окружающую среду.
            </p>
          </div>
        </div>
        <div className="card-container">
          <div className="card-1">
            <img src={red} className="card-img-top" alt="Card 2" />
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      <div className="cont-2">
        <div className="name">
          <div className="number-01">
            <p className="n-01">02</p>
          </div>
          <div className="cont-02">
            {/* <div className="context-2"> */}
            <p className="text-01">Yellow</p>
            {/* </div> */}
            <p className="osnov">
              <span>
                Желтый цвет обозначает товары средней степени
                перерабатываемости, <br />
                что подчеркивает их возможность повторного использования. Эти
                продукты <br />
                также могут быть лучшим выбором с точки зрения устойчивого
                потребления.
              </span>
            </p>
          </div>
        </div>
        <div className="card-container">
          <div className="card-2">
            <img src={yellow} className="card-img-top" alt="Card 2" />
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      <div className="cont-2">
        <div className="name">
          <div className="number-01">
            <p className="n-01">03</p>
          </div>
          <div className="cont-02">
            <div className="context-2">
              <p className="text-01">Green</p>
            </div>
            <p className="osnov">
              Зеленый цвет представляет собой экологически дружелюбные продукты,
              <br />
              которые легко перерабатываются и могут служить примером
              устойчивого <br />
              выбора. Эти товары призваны содействовать снижению негативного
              <br />
              воздействия на окружающую среду, предлагая потребителям более
              <br />
              ответственные варианты для их повседневного использования.
            </p>
          </div>
        </div>
        <div className="card-container">
          <div className="card-3">
            <img src={green} className="card-img-top" alt="Card 2" />
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      <Footer />
      <a href="/categories">
        <button className="category-button">Перейти к категориям</button>
      </a>
    </div>
  );
};

export default Home;
