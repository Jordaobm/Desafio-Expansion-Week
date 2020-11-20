import React, { useState, FormEvent, useEffect } from 'react';
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
    Form,
    Repositories,
    FindMusic,
    Error,
    MusicText,
} from './styles';
import { IoMdStopwatch } from 'react-icons/io'
import { AiOutlineArrowDown, AiOutlineReload } from 'react-icons/ai';
import { FiAlertCircle, FiCheck, FiChevronRight } from 'react-icons/fi';
import { BiLike } from 'react-icons/bi';
import api from '../../services/api';
//import credential from '../../config/credentials';

interface Repository {
    type: string;
    art: {
        id: string;
        name: string;
        url: string;
    }
    mus: [{
        name: string;
        url:string
    }]
}

const Home: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [newMusic, setNewMusic] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@ListaDeMusicas:repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('@ListaDeMusicas:repositories', JSON.stringify(repositories));


    }, [repositories])


    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!newRepo || !newMusic) {
            setInputError('Digite o nome do autor e da música!')
            return;
        }


        const response = await api.get<Repository>(`/search.php?art=${newRepo}&mus=${newMusic}&apikey={key}`)
        const repository = response.data;

        console.log(repository)

        if (repository.type == 'notfound' || repository.type == 'song_notfound') {
            setInputError('Nome do autor ou da música incorreto!')
        } else {
            setRepositories([...repositories, repository]);
            setNewRepo('')
            setNewMusic('')
            setInputError('')

        }
    }



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

           <MusicText>
               <h1>Música sempre ajuda</h1>
               <p>Com uma pequena parcela do que pude aprender até então no bootcamp, e um pouco sem tempo hábil devido à correria da semana, resolvi brincar um pouco com uma API interessante da internet! Que dev ai lembra do Vagalume?! Aplicativo para músicas? Digitando o nome do autor e o nome da música você consegue criar aqui uma pequena playlist para quando for codar haha. Adoro colocar músicas enquanto estilizo minhas páginas xD. OBS: O único problema é que dependendo da música, o vagalume tem a letra um pouco diferente e a gravação um pouco antiga, mas isso é detalhe né dev?! Bora se animar que o nivel 4 vem por ai!!!</p>
           </MusicText>


            <FindMusic>
                <Form onSubmit={handleAddRepository}>
                    <input value={newRepo} onChange={(e) => setNewRepo(e.target.value)} placeholder="Digite o nome do Autor"></input>
                    <input value={newMusic} onChange={(e) => setNewMusic(e.target.value)} placeholder="Digite o nome da Música"></input>
                    <button>Pesquisar</button>
                </Form>

                {inputError && <Error>{inputError}</Error>}

                <Repositories>
                    {repositories.map(repository => (
                        <a key={repository.art.id} target='_blank' href={repository.mus[0].url}>
                            <img src="https://cdn-images-1.medium.com/max/1200/1*BWkPidfUKtndVrJZxm4mxQ.png" alt="Vagalume" />
                            <div>
                                <strong>{repository.mus[0].name}</strong>
                                <p>{repository.art.name}</p>
                                <p>{repository.mus[0].url}</p>
                            </div>

                            <FiChevronRight size={20} />
                        </a>
                    ))}
                </Repositories>

            </FindMusic>

        </ContainerText>
        <Footer>
            <Container style={{ height: '350px' }}>


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