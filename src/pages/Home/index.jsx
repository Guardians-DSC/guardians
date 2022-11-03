import { Content, Wrapper, Title, Code, WrapperButtons, WrapperIcons, Blink, Image, Container} from "./styles";
import { Trans, useTranslation } from 'react-i18next';
import MobileImage from '@/assets/img/homeMobile.svg'
import SeeMore from '@components/SeeMore'
import RedesSociais from '@components/RedesSociais'
import Button from '@components/Button'


const Home = () => {

    const { t } = useTranslation();

    return (
        <Content>
            <Image>
                <img src={MobileImage} />
            </Image>
            <Wrapper>
                <Code>{ t('home.upperText')}</Code>
                <Title>
                    <Trans i18nKey={ 'home.title'}/>
                    <Blink>{ t('home.blinkBar')}</Blink>
                </Title>

                <WrapperButtons>
                    <Button
                        link={'about'}
                        style={{ 
                            backgroundColor: "#0D548B", 
                            borderRadius: "20px 0 0 0", 
                            color: "white",
                            width: "160px",
                            height: "42px",
                            border: "0"
                        }}
                        text={t('home.buttons.principal')}
                    />

                    <Button
                        link={'articles'}
                        style={{ 
                            border: "3",
                            borderColor: "#328FAC",
                            color: "#328FAC",
                            backgroundColor: "none",
                            borderRadius: "0 0 20px 0", 
                            width: "160px",
                            height: "42px"
                        }}
                        text={ t('home.buttons.secundary')}
                    />
                </WrapperButtons>
                <WrapperIcons>
                    <RedesSociais
                        instagramUrl={'https://www.instagram.com/guardiansufcg/'}
                        linkedinUrl={'https://www.linkedin.com/company/guardians-ufcg'}
                        githubUrl={'https://github.com/Guardians-DSC'}
                    />
                </WrapperIcons>
            </Wrapper>
            <Container>
                <SeeMore/>
            </Container>
        </Content>
    )
}
export default Home;