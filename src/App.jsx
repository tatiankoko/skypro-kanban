import './App.css'
import PopBrowse from "./components/popups/popBrowse/PopBrowse.jsx";
import PopNewCard from "./components/popups/popNewCard/PopNewCard.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import {WrapperStyled} from "./components/Wrapper.styled.js";

function App() {
  return (
    <>
      <WrapperStyled>
        {/*pop-up start*/}

        <div className="pop-exit" id="popExit">
          <div className="pop-exit__container">
            <div className="pop-exit__block">
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form className="pop-exit__form" id="formExit" action="#">
                <div className="pop-exit__form-group">
                  <button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="#">Да, выйти</a> </button>
                  <button className="pop-exit__exit-no _hover03" id="exitNo"><a href="#">Нет, остаться</a> </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <PopNewCard />

        <PopBrowse />

        {/*pop-up end*/}

        <Header />
        <Main />
      </WrapperStyled>

      {/*<script src="js/script.js"></script>*/}
    </>
  )
}

export default App
