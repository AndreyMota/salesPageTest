import React, { useState, useEffect } from 'react';
import { darken } from 'polished';
import styled from 'styled-components';
import idade from '/quiz/idade.jpg';
import proposito from '/quiz/proposito.jpeg';
import inseguranca from '/quiz/inseguranca.jpg';
import financas from '/quiz/financas.png';
import mental from '/quiz/mental.jpeg';
import carreira from '/quiz/carreira.jpg';
import porpuse from '/quiz/porpuse.jpg';
import relacionamento from '/quiz/relacionamentocut.png';
import confianca from '/quiz/confidence.jpeg';
import elevator from '/quiz/elevator.jpeg';
import pense from '/quiz/pense.gif';
import dinheiro from '/quiz/dinheiro.jpg';
import lider from '/quiz/lidercut.jpg';
import caminho from '/quiz/caminho.jpg';
import perfeito from '/quiz/perfeito.webp';
import renda from '/quiz/rendaC.gif';
import autoimagem from '/quiz/autoimagem.jpg';
import conversa from '/quiz/conversaC.gif';
import { HighlightedList } from './SellPage';
import { Helmet } from 'react-helmet';
import m from '/M.png';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #121212;
  color: #E0E0E0;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #333;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 8px;
  background-color: #BB86FC;
  transition: width 0.3s;
`;

const QuestionTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
  color: #BB86FC;
  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.75em;
  text-align: center;
  margin-bottom: 10px;
  color: #FFCDD2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;


const OptionButton = styled.button`
  background-color: ${props => props.bgcolor || '#BB86FC'};
  color: ${props => props.textColor || 'black'}; // Padrão para branco
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.bgcolor ? darken(0.1, props.bgcolor) : '#9E6EDC'};
  }
`;

const QuestionImage = styled.img`
  max-width: 80%;
  margin-top: 20px;
  border-radius: 10px;
`;

const ResultContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ResultTitle = styled.h2`
  color: #BB86FC;
  font-size: 2em;
`;

const ResultDescription = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
`;

const CTAButton = styled.button`
  background-color: #FF6F61;
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #E55C50;
  }
`;

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [problems, setProblems] = useState([]);
  const [ambitions, setAmbitions] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false); // Novo estado para indicar que o quiz foi finalizado
  const [answer, setAnswer] = useState(null);

  const questions = [
    {
      title: "Este Guia Vai Te Fazer Avançar 6 Anos Em 6 MESES Na Sua Jornada Como Um Homem De Valor",
      subtitle: "Descubra onde Você está com esse Teste de 2 minutos",
      options: [["Começar Teste Gratuito", 0]],
      image: caminho,
    },
    {
      title: "Para começar, selecione sua faixa etária:",
      options: [
        ["Menos de 18 anos", 1],
        ["Entre 18-30 anos", 2],
        ["Mais de 30 anos", 3]
      ],
      image: idade,
    },
    {
      title: "Qual destas descrições melhor define seu momento atual?",
      options: [
        ["Explorando novas oportunidades", 1],
        ["Buscando direção clara", 2],
        ["Aperfeiçoando habilidades existentes", 3]
      ],
      image: pense,
    },
    {
      title: "Sente que não está se esforçando o suficiente e que poderia dar mais(Lá ele) de si?",
      options: [
        ["Sim, frequentemente me pego procrastinando", 1],
        ["Eu quase sempre faço o que tenho que fazer", 2],
        ["Não, eu sou perfeito e os outros é que se esforçam mais do que é preciso", 3]
      ],
      image: perfeito,
    },
    {
      title: "Você sente que falta um senso de direção claro em sua vida?",
      options: [
        ["Sim, muitas vezes", 1],
        ["Às vezes, mas é confuso", 2],
        ["Não, tenho um propósito definido", 3]
      ],
      image: proposito,
    },
    {
      title: "Quão confiante você se sente em situações sociais?",
      options: [
        ["Raramente me sinto confiante e as pessoas dizem que sou tímido", 1],
        ["Depende da situação, com meus amigos sou tagarela", 2],
        ["Quase sempre estou confiante e consigo conversar com qualquer pessoa", 3]
      ],
      image: inseguranca,
    },
    {
      title: "Você acha que sua aparência ou atitude impacta na forma como as mulheres te percebem?",
      options: [
        ["Sim, sinto que poderia melhorar minha aparência ou atitude", 1],
        ["Talvez, mas não tenho certeza do que precisa mudar", 2],
        ["Não, estou confiante na minha aparência e atitude", 3]
      ],
      image: autoimagem,  // Substitua por um caminho de imagem apropriado
    },
    {
      title: "Como você se sente ao iniciar uma conversa com uma mulher que você não conhece?",
      options: [
        ["Me sinto muito nervoso e inseguro", 1],
        ["Depende da situação, às vezes sou confiante", 2],
        ["Estou confortável e seguro ao iniciar conversas", 3]
      ],
      image: conversa,  // Substitua por um caminho de imagem apropriado
    },
    {
      title: "Como você avalia sua capacidade de gerenciar suas finanças pessoais?",
      options: [
        ["Sempre preocupado com dinheiro, lato no quintal pra economizar cachorro", 1],
        ["Consigo gerenciar com dificuldade, sou brasileiro médio", 2],
        ["Estou seguro e no controle, posso adquirir tudo o que eu quero", 3]
      ],
      image: financas,
    },
    {
      title: "Qual sua fonte de renda atual?",
      options: [
        ["Sou CLT", 1],
        ["Sou empresário", 3],
        ["Sou autônomo", 2],
        ["Estou desempregado", 1]
      ],
      image: renda,
    },
    {
      title: "Como você se sente em relação à sua carreira ou situação profissional atual?",
      options: [
        ["Estou satisfeito com minha situação atual", 1],
        ["Estou buscando novas oportunidades ou melhorias", 2],
        ["Estou insatisfeito e quero uma mudança significativa", 3]
      ],
      image: carreira,
    },
    {
      title: "Qual é o estado da sua saúde mental atualmente?",
      options: [
        ["Frequentemente estressado e ansioso", 1],
        ["Alguns dias são melhores que outros", 2],
        ["Me sinto equilibrado e em paz", 3]
      ],
      image: mental,
    },
    {
      title: "Você enfrenta desafios em construir relacionamentos saudáveis?",
      options: [
        ["Sim, é um problema constante", 1],
        ["Às vezes, depende da situação", 2],
        ["Não, tenho relacionamentos sólidos", 3]
      ],
      image: relacionamento,
    },
    {
      title: "Qual seria o impacto de desenvolver uma autoconfiança inabalável na sua vida social e amorosa?",
      options: [
        ["Transformaria minha vida amorosa completamente", 1],
        ["Seria uma melhoria significativa nas minhas interações", 2],
        ["Não faria muita diferença, já sou confiante", 3]
      ],
      image: confianca,
    },
    {
      title: "Como seria para você ter relacionamentos que fluem naturalmente e sem estresse?",
      options: [
        ["Seria uma mudança enorme", 1],
        ["Melhoraria, mas não é prioritário", 2],
        ["Já estou satisfeito com meus relacionamentos", 3]
      ],
      image: elevator,
    },
    {
      title: "Como você se sentiria se tivesse controle total sobre suas finanças?",
      options: [
        ["Muito aliviado e seguro", 1],
        ["Seria positivo, mas não essencial", 2],
        ["Já me sinto no controle", 3]
      ],
      image: dinheiro,
    },
    {
      title: "Você gostaria de ser reconhecido como um líder em sua comunidade ou no trabalho?",
      options: [
        ["Sim, isso seria incrível", 1],
        ["Talvez, dependendo da oportunidade", 2],
        ["Não, não é meu objetivo", 3]
      ],
      image: lider,
    },
    {
      title: "Você está interessado em aprender como alcançar confiança, propósito e sucesso?",
      options: [
        ["Sim, quero aprender mais", 1],
        ["Gostaria de aprender mais", 1],
        ["Me mostre como", 1]
      ],
    },
    {
      title: "Seria bom para você se houvesse um guia prático de como alcançar tudo isso?",
      options: [
        ["Seria incrível!", 3],
        ["É do que eu preciso", 2],
        ["Seria muito bom", 1]
      ],
    }
  ];
  

  // Função para lidar com o evento beforeunload
  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = ''; 
  };

  // Adicionar ou remover o evento beforeunload dependendo da etapa do quiz
  useEffect(() => {
    if (step > 0 && step < questions.length) {
      // Adiciona o evento antes da descarga (beforeunload) ao iniciar o quiz
      window.addEventListener('beforeunload', handleBeforeUnload);
    } else {
      // Remove o evento ao finalizar o quiz ou ao iniciar
      window.removeEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      // Limpa o evento quando o componente é desmontado
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [step]);

  useEffect(() => {
    if (quizFinished) {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [quizFinished]);



  const handleOptionClick = (option, optionScore) => {
    const newScore = score + optionScore;
    console.log("Score: " + newScore + ", score da opção: " + optionScore);
    setScore(newScore);
  
    if (step < questions.length - 2) {
      console.log("Step: " + step);
      setStep(step + 1);
    } else if (step === questions.length - 2) {
      determineResult(newScore);
      console.log("Step: " + step);
      setStep(step + 1);
      console.log("Step: " + step);
      console.log("Quiz terminou poha")
      setQuizFinished(true);
    } else {
      console.log("Quiz terminou poha")
      setQuizFinished(true);
      // Remover o evento beforeunload e redirecionar para a página de vendas
      window.removeEventListener('beforeunload', handleBeforeUnload);
      console.log("Redirecionando para a página de vendas...");
      // Redirecionar para a página de vendas
      window.location.href = "/DescubraOSeuPotencial";
    }
  };

  const handleRedirectClick = () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    console.log("Redirecionando após quiz finalizado...");
    window.location.href = "/DescubraOSeuPotencial";
  };
  
  

  const determineResult = (finalScore) => {
    setProblems([]);
    setAmbitions([]);
    
    if (finalScore <= 20) {
      setProblems([
        "Falta de direção e propósito claro na vida.",
        "Insegurança e baixa autoestima, especialmente em interações sociais.",
        "Dificuldades financeiras e gestão.",
        "Relacionamentos instáveis e problemáticos, incluindo dificuldades em atrair e manter a atenção feminina."
      ]);
      setAmbitions([
        "Encontrar um propósito significativo.",
        "Desenvolver autoconfiança e segurança emocional para se sentir mais atraente.",
        "Melhorar a saúde financeira e o controle sobre o dinheiro.",
        "Construir relacionamentos mais saudáveis e satisfatórios, especialmente com o sexo oposto."
      ]);
      setResult({
        title: "Explorador Perdido",
        description: "Você está em um ponto onde busca sentido e direção na vida. Enfrenta desafios significativos que impactam sua autoconfiança e capacidade de atrair a atenção feminina. Focar em autoconhecimento e habilidades sociais ajudará a navegar por esses desafios e melhorar suas interações."
      });
    } else if (finalScore <= 30) {
      setProblems([
        "Falta de clareza em objetivos e metas.",
        "Necessidade de desenvolver habilidades específicas, incluindo sociais.",
        "Desafios em se destacar e atrair a atenção em ambientes sociais."
      ]);
      setAmbitions([
        "Definir metas claras e alcançáveis.",
        "Desenvolver habilidades sociais e de comunicação para aumentar sua presença e atração.",
        "Melhorar em áreas específicas da vida pessoal e profissional, e se tornar mais atrativo para as mulheres."
      ]);
      setResult({
        title: "Buscador de Clareza",
        description: "Você tem alguns objetivos e um senso geral de direção, mas ainda precisa de mais clareza e foco, especialmente em como se destacar em interações sociais e atrair a atenção feminina. Refinar suas metas e desenvolver suas habilidades sociais são os próximos passos."
      });
    } else if (finalScore <= 40) {
      setProblems([
        "Desejo contínuo de melhorar e aperfeiçoar habilidades, incluindo habilidades de atração e interação.",
        "Busca por conhecimentos e estratégias avançadas para aumentar seu impacto social.",
        "Satisfação em diversas áreas, mas ainda buscando excelência em se conectar com os outros, especialmente com mulheres."
      ]);
      setAmbitions([
        "Dominar habilidades já existentes e se tornar irresistível em interações sociais.",
        "Adquirir novos conhecimentos e estratégias para aumentar sua atratividade e presença social.",
        "Alcançar a excelência e o sucesso pleno em todas as áreas, incluindo sua vida amorosa."
      ]);
      setResult({
        title: "Aperfeiçoador de Habilidades",
        description: "Você está confiante e no controle de muitas áreas da sua vida, mas está sempre buscando maneiras de melhorar e aperfeiçoar suas habilidades, inclusive em como se tornar mais atraente e confiante em interações com mulheres. A jornada para a excelência é contínua e você está no caminho certo."
      });
    } else {
      setProblems([
        "Desejo de expandir influência e liderança, especialmente em contextos sociais.",
        "Necessidade de estratégias avançadas para se destacar como líder e atrair seguidores.",
        "Objetivo de impactar positivamente a comunidade ou o trabalho e atrair a atenção das pessoas ao seu redor, inclusive mulheres."
      ]);
      setAmbitions([
        "Expandir influência e impacto positivo, se tornando um modelo de atração e liderança.",
        "Dominar estratégias avançadas de liderança e se tornar irresistível em seu círculo social.",
        "Alcançar posições de destaque e liderança eficaz, e ser reconhecido por sua presença forte e atrativa."
      ]);
      setResult({
        title: "Líder Aspirante",
        description: "Você deseja ou já está em uma posição de liderança e está buscando maneiras de expandir sua influência, tanto em sua carreira quanto em sua vida social. Continuar desenvolvendo suas habilidades de liderança e atração será crucial para maximizar seu impacto e se tornar irresistível em seu ambiente."
      });
    }
  };
  
  

  return (
    <QuizContainer>
      <Helmet>
        <title>Quiz</title>
        <link rel="icon" href={m} />
      </Helmet>
      {step < questions.length - 1 ? (
        <>
          <ProgressBar>
            <Progress progress={(step + 1) / questions.length * 100} />
          </ProgressBar>
          
          <QuestionTitle>{questions[step].title}</QuestionTitle>
          <Subtitle>{questions[step].subtitle}</Subtitle>
          {questions[step].options.map((option, index) => (
            <OptionButton key={index} onClick={() => handleOptionClick(option[0], option[1])}>
              {option[0]}
            </OptionButton>
          ))}
          {questions[step].image && <QuestionImage src={questions[step].image} alt="question related" />}
          {/* {step === 2 && <CTAButton onClick={() => setStep(step + 1)}>Saiba mais sobre como resolver esses problemas.</CTAButton>} */}
          {/* {step === 6 && <CTAButton onClick={() => setStep(step + 1)}>Veja como alcançar isso!</CTAButton>} */}
          {/* {step === 10 && <CTAButton onClick={() => setStep(step + 1)}>Descubra a solução agora.</CTAButton>}  */}
        </>
      ) : (
        <>
          <ResultContainer>
            <ResultTitle>Seu Perfil: {result?.title}</ResultTitle>
            <ResultDescription>{result?.description}</ResultDescription>
          </ResultContainer>
          <div>
              <HighlightedList>
                <h3>Problemas</h3>
                {problems.map((problem, index) => (
                  <li key={index}>{problem}</li>
                ))}
              </HighlightedList>
              <HighlightedList>
                <h3>Ambições</h3>
                {ambitions.map((ambition, index) => (
                  <li key={index}>{ambition}</li>
                ))}
              </HighlightedList>
          </div>
          <Subtitle>O segredo é parar de correr atrás das borboletas... E cuidar do jardim para que elas venham até você.</Subtitle>
          <ResultDescription>
            Descubra os segredos do progresso acelerado e do desenvolvimento pessoal. Transforme sua vida rapidamente com ensinamentos poderosos. <strong>Clique aqui para começar agora!</strong>
          </ResultDescription>


          <OptionButton bgcolor="#28a745" textColor="#FFFFFF" onClick={handleRedirectClick}>
            Conheça estratégias para o seu crescimento. Clique aqui para saber mais.
          </OptionButton>
        </>
      )}
    </QuizContainer>
  );
};

export default Quiz;
