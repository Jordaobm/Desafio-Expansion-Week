import React from 'react';
import {
    Header,
    Container,
    ContentText,
    ContentImage,
    PatienceText,
    ContainerText,
    ArrowDown,
    CardText,
    Text1,
    Text2,
    CardTextChecked,
    IconAlert,
    AnimatedLoading,
    Footer,
} from './styles';
import { IoMdStopwatch } from 'react-icons/io'
import { AiOutlineArrowDown, AiOutlineReload } from 'react-icons/ai';
import { FiAlertCircle, FiCheck } from 'react-icons/fi';
import {BiLike} from 'react-icons/bi';


const Home: React.FC = () => {


    return (<>
        <Header>
            <Container>

                <ContentText>
                    <PatienceText>
                        <p>Você tem</p>
                        <h1>paciência?</h1>
                    </PatienceText>

                </ContentText>
                <ContentImage>
                    <IoMdStopwatch size={220} color="#DE1306" />
                </ContentImage>
            </Container>
        </Header>

        <ArrowDown>
            <AiOutlineArrowDown size={40} color="#FFF" />

        </ArrowDown>





        <ContainerText>

            <Text1>
                <h1>
                    <strong>Faala dev beleza? </strong>
                </h1>
                <p>
                    
                    Se você chegou até aqui é porque você tem paciência e perseverança, pois fácil não é. Mas o que é a paciência, ser paciente e perseverante? Dev, rola essa página para baixo que eu te conto!!!!

               </p>
            </Text1>


            <AnimatedLoading>
                <AiOutlineReload size={60} />
            </AnimatedLoading>


            <Text1>
                <h1>
                    <strong>Você é paciente?</strong>
                </h1>
                <p>
                    O desenvolvimento de uma aplicação não é uma tarefa fácil. É um esforço complexo que geralmente inclui longos processos. Desde o início do projeto, passando pela execução do projeto, testes, implantação, atualizações ... A maioria dessas atividades leva muito tempo, mesmo em ambientes ágeis. A paciência é especialmente importante quando você está começando como desenvolvedor. A pessoa mais importante com quem você terá que ser paciente é você. Dê a si mesmo tempo suficiente, chances suficientes de cometer erros e corrigi-los. Depois de ser paciente consigo mesmo, é mais fácil ser paciente com outras pessoas. Às vezes, as pessoas precisarão ser mais convincentes, você precisará fazer o melhor para “vender” sua ideia ou abordagem. Ser paciente é seu aliado nesta missão.
                    Paciência é uma característica de manter um controle emocional equilibrado, sem perder a calma. É a capacidade de suportar incômodos e dificuldades. Persistir numa atividade difícil, mantendo-se tranquilo e acreditando que irá alcançar seus objetivos, ser perseverante, esperar o momento, aguardar em paz a compreensão que ainda não se tenha obtido e esquecer frustrações.
               </p>
            </Text1>

            <Text2>
                <IconAlert>
                    <FiAlertCircle size={150} color='#DE1306' />
                </IconAlert>

                <CardText>
                    "- Desde o começo do bootcamp me encontrei em várias situações complicadas. Códigos não executando, desafios incompletos, aulas atrasadas, conteúdo acumulado, sindromes do impostor (que nos fazem desacreditar de nós mesmos), sensação de não estar de fato acompanhado o conteúdo e não estar aprendendo."
                </CardText>
            </Text2>

            <Text2 style={{ flexDirection: 'row-reverse', marginTop: '100px' }}>
                <IconAlert>
                    <FiCheck size={150} color='#65BF73' />
                </IconAlert>

                <CardTextChecked>
                    "- Mas uma das soft skills mais importantes pra mim me fez estar aqui hoje, codando essa pequena página dizendo pra você PACIÊNCIA DEV, PACIÊNCIA. Tudo tem seu tempo, sua hora e lugar. Paciência é uma virtude como diriam os filósofos de plantão. Se está dificil, pare, respire, descanse um pouco. As vezes você está tão focado em resolver um problema que esquece que ele pode estar no ; da linha de cima. Se acalme, pegue uma xícara de café e tire um tempo!!! Seu código não foge e você pode voltar depois, mais relaxado e pronto para encarar o problema!"
                </CardTextChecked>
            </Text2>


        </ContainerText>
        <Footer>
            <Container style={{ height:'350px'}}>

                
                <ContentImage>
                    <BiLike size={220} color="#FFF" />
                </ContentImage>
                <ContentText>
                    <PatienceText>
                        <p>Seja paciente e</p>
                        <h1>persista!</h1>
                    </PatienceText>

                </ContentText>
            </Container>
        </Footer>

    </>
    )
}

export default Home;