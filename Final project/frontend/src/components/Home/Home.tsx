import React, { useEffect, useRef } from "react";
import video from "./vi.mp4";
import { Chart, ChartConfiguration } from "chart.js/auto";
import red from "./133.jpeg";
import yellow from "./14.jpg";
import green from "./13.jpg";

import "./home.css";
import "../../index.css";

import Footer from "./Footer/Footer";

const Home: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        const data = {
          labels: ["Purple", "Yellow", "Green"],
          datasets: [
            {
              data: [50, 40, 10],
              backgroundColor: ["purple", "khaki", "olive"],
            },
          ],
        };

        const config: ChartConfiguration<"pie"> = {
          type: "pie",
          data: data,
          options: {
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context: any) {
                    const label = context.label || "";
                    const value = context.parsed || 0;
                    return `${label}: ${value}%`;
                  },
                },
              },
            },
          },
        };

        const myChart = new Chart(ctx, config);

        return () => {
          myChart.destroy();
        };
      }
    }
  }, []);

  return (
    <div>
      <video autoPlay muted loop className="video-background">
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay">
        <div className="text-overlay">
          {/* <h2 className="h2">
            Каждая вещь, вторично используемая, несет в себе глубокое стремление
            к заботе о будущем. Ресайкл — это путь к устойчивому и
            ответственному образу жизни.
          </h2> */}
        </div>
      </div>
      <div className="cont-1">
        <div className="flex-container">
          <div className="conttext-1 text-container">
            <div className="contname-1"></div>
            <div className="lane-1"></div>
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
          <div className="chart-container">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>

      <div className="center-text-2">
        <p className="text-2">
          Каждая карточка представляет собой уникальный код цвета, являющийся
          ключом к пониманию уровня <br />
          устойчивости продукта к переработке.
          <div className="lane-t"></div>
        </p>
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
