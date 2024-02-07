import React from "react";
import video from "./video.mp4";
import dia from "./dia.svg";
import "./home.css";
import Footer from "./Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <video autoPlay muted loop className="video-background">
        <source src={video} type="video/mp4" />
      </video>
      <div className="text-container">
        <div className="left-text">
          <p>
            Одежда из секонд-хенда раньше была предметом для благотворительных
            магазинов, хипстеров, блошиных рынков. С ноября 2020 г. спрос на
            бэушные модные товары вырос на 45%. Ожидается, что модели повторной
            продажи смогут продлить срок службы продукта в 1,7 раза исходя из
            средней продолжительности владения подержанными товарами. По
            загрязнению окружающей среды индустрия моды является второй отраслью
            в мире, уступая лишь нефтяному бизнесу.
          </p>
        </div>
        <div className="divider"></div>
        <div className="right-text">
          <p>
            Ежегодно в мире выбрасывается около 70 млн т одежды и лишь 12%
            перерабатывается. Европейский союз предложил финансирование с 2019
            по 2020 г. в размере $23,5 млн для поддержки текстильных изделий на
            основе круговых бизнес-моделей. Таким образом, в 2022 г. рынок
            рисейла достигнет $41 млрд, а в ближайшие три года – $64 млрд.
            Ожидается, что к 2029 г. рынок перепродажи одежды вырастет почти
            вдвое по сравнению с рынком «быстрой моды».
          </p>
        </div>
      </div>
      <div className="diagram-container">
        <div className="diagramm">
          <img src={dia} alt="diagramm" />
        </div>
        <div className="diagramm">
          <img src={dia} alt="diagramm" />
        </div>
      </div>
      <Footer />

      <button className="category-button">Перейти к категориям</button>
    </div>
  );
};

export default Home;
