import {WrapperStyled} from "../components/Wrapper.styled.js";
import {MainStyled} from "../components/main/Main.styled.js";
import {Modal, ModalTtl} from "../components/signIn/SignIn.styled.js";

const NotFoundPage = () => {
    return (
        <WrapperStyled>
            <MainStyled>
                <Modal>
                    <ModalTtl>
                        <h2>Страница не найдена</h2>
                    </ModalTtl>
                </Modal>
            </MainStyled>
        </WrapperStyled>
    )
};

export default NotFoundPage;