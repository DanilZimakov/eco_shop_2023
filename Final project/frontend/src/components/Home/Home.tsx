import video from "./vi.mp4";
import red from "./133.jpeg";
import yellow from "./14.jpg";
import green from "./13.jpg";
import first from "./1.png";
import second from "./2.png";
import third from "./3.png";
import four from "./4.png";
import five from "./5.png";
import six from "./6.png";
// import os from "./Grafika.jpg";
import p from "./photo.jpeg";

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

        {/* <div className="flex-container">
          <div className="conttext-1 text-container">
            <div className="contname-1"></div>
           
            <div className="title-1">
              <p className="nasha">SWAP STYLE</p>
            </div>
            <div className="description-1">
              <p className="text">
                Наша цель - укрепить индустрию моды, снижая использование новых
                ресурсов и акцентируя внимание на переработке существующих
                вещей. Мы стремимся уменьшить экологический след от производства
                текстильных волокон и сырья, а именно снизить выбросы парниковых
                газов на 45% до 2030 года.
              </p>
            </div>
          </div>
        </div> */}
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
