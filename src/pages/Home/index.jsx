import { Content, Wrapper, Title, Code, WrapperButtons, WrapperIcons, Blink} from "./styles";
import { Trans, useTranslation } from 'react-i18next';
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { useNavigate} from 'react-router-dom';

const Home = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/about')
    }

    const navigateToArticles = () => {
        navigate('/articles')
    }

    return (
        <Content>
            <Wrapper>
                <Code>{ t('home.upperText')}</Code>
                <Title>
                    <Trans i18nKey={ 'home.title'}/>
                    <Blink>{ t('home.blinkBar')}</Blink>
                </Title>

                <WrapperButtons>
                    <button
                        onClick={navigateToAbout}
                        style={{ 
                            backgroundColor: "#0D548B", 
                            borderRadius: "20px 0 0 0", 
                            color: "white",
                            width: "160px",
                            height: "42px",
                            border: "0"
                        }}>
                        { t('home.buttons.principal')}
                    </button>
                    <button
                        onClick={navigateToArticles}
                        style={{ 
                            border: "3",
                            borderColor: "#328FAC",
                            color: "#328FAC",
                            backgroundColor: "none",
                            borderRadius: "0 0 20px 0", 
                            width: "160px",
                            height: "42px"
                        }}
                    >
                        { t('home.buttons.secundary')}
                    </button>
                </WrapperButtons>

                <WrapperIcons>
                        <a href="https://www.instagram.com/guardiansufcg/" style={{ color: "#328FAC"}} target="_blank">
                            <AiOutlineInstagram/>   
                        </a>
                        <a href="https://www.linkedin.com/company/guardians-ufcg" style={{ color: "#328FAC"}} target="_blank">
                            <AiFillLinkedin/>  
                        </a>
                        <a href="https://github.com/Guardians-DSC" style={{ color: "#328FAC"}} target="_blank">
                            <AiOutlineGithub/>
                        </a>
                </WrapperIcons>
            </Wrapper>
        </Content>
    )
}
export default Home;