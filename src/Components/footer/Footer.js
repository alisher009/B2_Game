import price from '../../img/price.jpg'
import inst from '../../img/in.svg'
import tel from '../../img/tel.svg'
import loc from '../../img/loc2.svg'


const Footer = () => {
  return (
    <section id="posts-comments">
      <div class="flex">
        <div class="posts-comments-box">
          <div class="footer-center">
            <div class="blockIcon">

              <img class="locat" src={loc} />
              <div class="text" >
                <p><a class="loc" href="https://www.google.com/maps/place/30+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD%D0%B0,+%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%D0%BD%D0%B4+140100,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@39.6736409,66.9357495,17z/data=!4m12!1m6!3m5!1s0x3f4d1969eedd5f57:0xdba722cc3359182b!2sTABAKA+24!8m2!3d39.6736368!4d66.9379382!3m4!1s0x3f4d1908bded3f39:0x757b529fdcdb1f05!8m2!3d39.6743417!4d66.9382039?hl=ru-KG"> <span>30Ул.Гагарина  Ориентир Табака24</span></a></p>
              </div>
            </div>
            <div class="blockIcon">
              <img src={tel} />

              <div class="text">
                <i class="fa fa-phone"></i>
                <p> +(998)90 270-89-99 </p>
              </div>
            </div>
            <div class="blockIcon">
              <img src={inst} />

              <div class="text">
                <i class="fa fa-envelope"></i>
                <p><a href="https://www.instagram.com/b2_game_/">B2_Game</a></p>
              </div>
            </div>
          </div>

        </div>
        <div class="posts-comments-box">
          <div class="post-item">
            <img src={price} />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
