import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import idade from '../assets/quiz/idade.jpg';
import proposito from '../assets/quiz/proposito.jpeg';
import inseguranca from '../assets/quiz/inseguranca.jpg';
import financas from '../assets/quiz/financas.png';
import mental from '../assets/quiz/mental.jpeg';
import carreira from '../assets/quiz/carreira.jpg';
import porpuse from '../assets/quiz/porpuse.jpg';
import relacionamento from '../assets/quiz/relacionamentocut.png';
import confianca from '../assets/quiz/confidence.jpeg';
import elevator from '../assets/quiz/elevator.jpeg';
import pense from '../assets/quiz/pense.gif';
import dinheiro from '../assets/quiz/dinheiro.jpg';
import lider from '../assets/quiz/lidercut.jpg';
import caminho from '../assets/quiz/caminho.jpg';
import { HighlightedList } from './SellPage';

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
  background-color: #BB86FC;
  color: #121212;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #9E6EDC;
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

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [problems, setProblems] = useState([]);
  const [ambitions, setAmbitions] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false); // Novo estado para indicar que o quiz foi finalizado

  const questions = [
    {
      title: "Este Guia Vai Te Fazer Avançar 6 Anos Em 6 MESES Na Sua Jornada Como Um Homem De Valor",
      subtitle: "Descubra onde Você está com esse Teste de 2 minutos",
      options: [["Comecar Teste Gratuito", 0]],
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
      title: "Você sente que falta um propósito claro em sua vida?",
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
        ["Raramente me sinto confiante", 1],
        ["Depende da situação", 2],
        ["Quase sempre estou confiante", 3]
      ],
      image: inseguranca,
    },
    {
      title: "Como você avalia sua capacidade de gerenciar suas finanças pessoais?",
      options: [
        ["Sempre preocupado com dinheiro", 1],
        ["Consigo gerenciar, mas com dificuldade", 2],
        ["Estou seguro e no controle", 3]
      ],
      image: financas,
    },
    {
      title: "Você se sente satisfeito com a direção da sua carreira?",
      options: [
        ["Não, estou perdido", 1],
        ["Tenho algumas ideias, mas pouca clareza", 2],
        ["Sim, tenho objetivos claros", 3]
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
      title: "Como você se sentiria acordando todos os dias com um propósito claro?",
      options: [
        ["Motivado e energizado", 1],
        ["Interessado, mas com dúvidas", 2],
        ["Não vejo muita diferença", 3] //inverti as pontuações aqui
      ],
      image: porpuse,
    },
    {
      title: "Qual seria o impacto de desenvolver uma autoconfiança inabalável?",
      options: [
        ["Transformaria minha vida completamente", 1],
        ["Seria uma melhoria significativa", 2],
        ["Não faria muita diferença", 3]
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
        ["Sim, quero aprender mais", 3],
        ["Gostaria de aprender mais", 1],
        ["Me mostre como", 2]
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
    if (step > 0 && step < questions.length - 2) {
      // Adiciona o evento antes da descarga (beforeunload) ao iniciar o quiz
      window.addEventListener('beforeunload', handleBeforeUnload);
      console.log("Evento beforeunload adicionado");
    } else {
      // Remove o evento ao finalizar o quiz ou ao iniciar
      window.removeEventListener('beforeunload', handleBeforeUnload);
      console.log("Evento beforeunload removido");
    }
  }, [step, !quizFinished]);



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
      // Remover o evento beforeunload e redirecionar para a página de vendas
      window.removeEventListener('beforeunload', handleBeforeUnload);
      console.log("Redirecionando para a página de vendas...");
      // Redirecionar para a página de vendas
      window.location.href = "/";
    }
  };

  const handleRedirectClick = () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    console.log("Redirecionando após quiz finalizado...");
    window.location.href = "/";
  };
  
  

  const determineResult = (finalScore) => {
    setProblems([]);
    setAmbitions([]);
    // Ajustando os intervalos de pontuação
    if (finalScore <= 20) {
      setProblems([
        "Falta de direção e propósito claro na vida.",
        "Insegurança e baixa autoestima.",
        "Dificuldades financeiras e gestão.",
        "Relacionamentos instáveis e problemáticos."
      ]);
      setAmbitions([
        "Encontrar um propósito significativo.",
        "Desenvolver autoconfiança e segurança emocional.",
        "Melhorar a saúde financeira e o controle sobre o dinheiro.",
        "Construir relacionamentos mais saudáveis e satisfatórios."
      ]);
      setResult({
        title: "Explorador Perdido",
        description: "Você está em um ponto onde está buscando um sentido e direção na vida. Há desafios significativos que precisam ser enfrentados para que você possa se sentir seguro e realizado.",
      });
    } else if (finalScore <= 30) {
      setProblems([
        "Falta de clareza em objetivos e metas.",
        "Necessidade de desenvolver habilidades específicas.",
        "Desafios em certas áreas da vida que precisam ser melhorados."
      ]);
      setAmbitions([
        "Definir metas claras e alcançáveis.",
        "Desenvolver habilidades necessárias para o sucesso.",
        "Melhorar em áreas específicas da vida pessoal e profissional."
      ]);
      setResult({
        title: "Buscador de Clareza",
        description: "Você tem alguns objetivos e um senso geral de direção, mas há áreas que ainda precisam de mais clareza e foco para alcançar o sucesso desejado.",
      });
    } else if (finalScore <= 40) {
      setProblems([
        "Desejo contínuo de melhorar e aperfeiçoar habilidades.",
        "Busca por conhecimentos e estratégias avançadas.",
        "Satisfação em diversas áreas, mas ainda buscando excelência."
      ]);
      setAmbitions([
        "Dominar habilidades já existentes.",
        "Adquirir novos conhecimentos e estratégias avançadas.",
        "Alcançar a excelência e o sucesso pleno em todas as áreas."
      ]);
      setResult({
        title: "Aperfeiçoador de Habilidades",
        description: "Você está confiante e no controle de muitas áreas da sua vida, mas está sempre buscando maneiras de melhorar e aperfeiçoar suas habilidades e conhecimentos.",
      });
    } else {
      setProblems([
        "Desejo de expandir influência e liderança.",
        "Necessidade de estratégias avançadas de liderança.",
        "Objetivo de impactar positivamente comunidade ou trabalho."
      ]);
      setAmbitions([
        "Expandir influência e impacto positivo.",
        "Dominar estratégias avançadas de liderança.",
        "Alcançar posições de destaque e liderança eficaz."
      ]);
      setResult({
        title: "Líder Aspirante",
        description: "Você deseja ou já está em uma posição de liderança e está buscando maneiras de expandir sua influência e impactar positivamente sua comunidade ou ambiente de trabalho. ",
      });
    }
  };
  

  return (
    <QuizContainer>
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
          <ResultDescription>Descubra os segredos do progresso acelerado e do desenvolvimento pessoal, inspirados pelos ensinamentos de antigos mestres e filósofos contemporâneos. Explore como você pode transformar sua vida em um curto espaço de tempo.</ResultDescription>

          <OptionButton onClick={handleRedirectClick}>
            Conheça estratégias para o seu crescimento.
          </OptionButton>
        </>
      )}
    </QuizContainer>
  );
};

export default Quiz;
