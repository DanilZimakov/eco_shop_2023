import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-bs">
      <div className="row">
        <div className="col-md-3 footer-brand animated fadeInLeft">
          <h2>SwapStyleEco</h2>
          <p>
            SwapStyle и ресайкл вещей - путь к устойчивости. SwapStyle облегчает
            обмен одеждой, сокращая отходы. Ресайкл вещей поддерживает идею
            вторичного использования, уменьшая потребление. Объединяясь в эти
            инициативы, мы формируем ответственное потребление, сохраняя
            окружающую среду.
          </p>
          <p>© 2024 «swap-style-eco.shop».</p>
        </div>

        <div className="col-md-2 footer-social animated fadeInDown">
          <h4>Social network</h4>
          <ul>
            <li>
              <a href="#">VK</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 footer-ns animated fadeInRight">
          <h4>Новостная рассылка</h4>
          <p>
            Подпишитесь на нашу новостную рассылку, чтоб не пропустить ничего
            важного!
          </p>
          <p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Введите email..."
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  <span className="glyphicon glyphicon-envelope"></span>
                </button>
              </span>
            </div>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
