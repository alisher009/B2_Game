const SimulatorGame = () => {
    return ( 
        <>
            <section id="recent-games">
          <h1>Arcada Games</h1>
          <div class="flex">
            <div class="box">
              <img src="https://gamemag.ru/images/cache/News/News171732/55d96f600a-2_1390x600.jpg" alt="" />
              <div class="box-lower-section">
                <h4>Forza Horizon 4</h4>
                <p>Forza Horizon 4 — гоночная игра в жанре аркадного автосимулятора в открытом мире, разработанная компанией Playground Games в сотрудничестве с Turn 10 Studios под издательством Microsoft Studios для игровой консоли Xbox One и ПК от Microsoft.</p>
              </div>
            </div>

            <div class="box">
              <img src="https://cdn.givemesport.com/wp-content/uploads/2022/01/21_11_09_2e5e420443d7728741bc4b1a4ec5e0c3_960-1.jpg" alt=""/>
              <div class="box-lower-section">
                <h4>Forza Horizon 5</h4>
                <p>Forza Horizon 5 — компьютерная игра 2021 года в жанре аркадного гоночного симулятора, разработанная Playground Games и изданная Xbox Game Studios. Игра была анонсирована в июне 2021 года на мероприятии E3 2021.</p>
              </div>
            </div>

            <div class="box">
              <img src="https://marudzenie.pl/wp-content/uploads/2016/09/Assetto-Corsa-recenzja.jpg" alt=""/>
              <div class="box-lower-section">
                <h4>Assetto Corsa</h4>
                <p>Assetto Corsa — компьютерная игра в жанре автосимулятора, разработанная итальянской студией Kunos Simulazioni. Игра базируется на применении реального гоночного опыта с поддержкой расширенных настроек и модификаций. Релиз игры состоялся 8 ноября 2013 года в Steam Early Access.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="tournaments">
          <div class="flex">
            <div class="box">
              <div class="tournaments-image">
                <img class="n1" src="https://savegame.pro/wp-content/uploads/2020/11/city-car-driving-cover.jpg" alt="" />
              </div>
              <div class="tournaments-content">
                <h3>City Car Driving</h3>
                <p>City Car Driving – реалистичный симулятор вождения автомобиля, который поможет вам освоить базовые навыки управления машиной в различных дорожных условиях, с погружением в среду, максимально приближенную к реальной.</p>
              </div>
            </div>

            <div class="box">
              <div class="tournaments-image">
                <img src="https://i.playground.ru/e/B_iMPjAeblsKxXYajh0nig.jpeg" alt="" />
              </div>
              <div class="tournaments-content">
                <h3>Euro Truck Simulator 2</h3>
                <p>
                  SnowRunner — это огромная песочница для наемного водителя грузовика, а ее базовые механики выглядят узнаваемо и просто: выполнять поручения, доставлять грузы, получать за это деньги и опыт, чтобы открывать улучшения, которые помогут еще эффективнее делать свою работу.
                </p>
              </div>
            </div>
          </div>
        </section>
</>
     );
}
 
export default SimulatorGame;