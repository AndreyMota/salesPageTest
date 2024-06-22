import React from 'react';
import styled from 'styled-components';
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


const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Quiz = () => {
  const [step, setStep] = React.useState(0);

  const questions = [
    {
      title: "Para começar, selecione sua faixa etária:",
      options: ["Menos de 18 anos", "Entre 18-30 anos", "Mais de 30 anos"],
    },
    {
      title: "Qual destas descrições melhor define seu momento atual?",
      options: ["Explorando novas oportunidades", "Buscando direção clara", "Aperfeiçoando habilidades existentes"],
      image: pense,
    },
    // Perguntas sobre Problemas/Dores
    {
      title: "Você sente que falta um propósito claro em sua vida?",
      options: ["Sim, muitas vezes", "Às vezes, mas é confuso", "Não, tenho um propósito definido"],
      image: proposito,
    },
    {
      title: "Quão confiante você se sente em situações sociais?",
      options: ["Raramente me sinto confiante", "Depende da situação", "Quase sempre estou confiante"],
      image: inseguranca,
    },
    {
      title: "Como você avalia sua capacidade de gerenciar suas finanças pessoais?",
      options: ["Sempre preocupado com dinheiro", "Consigo gerenciar, mas com dificuldade", "Estou seguro e no controle"],
      image: financas,
    },
    {
      title: "Você se sente satisfeito com a direção da sua carreira?",
      options: ["Não, estou perdido", "Tenho algumas ideias, mas pouca clareza", "Sim, tenho objetivos claros"],
      image: carreira,
    },
    {
      title: "Qual é o estado da sua saúde mental atualmente?",
      options: ["Frequentemente estressado e ansioso", "Alguns dias são melhores que outros", "Me sinto equilibrado e em paz"],
      image: mental,
    },
    {
      title: "Você enfrenta desafios em construir relacionamentos saudáveis?",
      options: ["Sim, é um problema constante", "Às vezes, depende da situação", "Não, tenho relacionamentos sólidos"],
      image: relacionamento,
    },
    // Perguntas sobre Sonhos/Desejos
    {
      title: "Como você se sentiria acordando todos os dias com um propósito claro?",
      options: ["Motivado e energizado", "Interessado, mas com dúvidas", "Não vejo muita diferença"],
      image: porpuse,
    },
    {
      title: "Qual seria o impacto de desenvolver uma autoconfiança inabalável?",
      options: ["Transformaria minha vida completamente", "Seria uma melhoria significativa", "Não faria muita diferença"],
      image: confianca,
    },
    {
      title: "Como seria para você ter relacionamentos que fluem naturalmente e sem estresse?",
      options: ["Seria uma mudança enorme", "Melhoraria, mas não é prioritário", "Já estou satisfeito com meus relacionamentos"],
      image: elevator,
    },
    {
      title: "Como você se sentiria se tivesse controle total sobre suas finanças?",
      options: ["Muito aliviado e seguro", "Seria positivo, mas não essencial", "Já me sinto no controle"],
      image: dinheiro,
    },
    {
      title: "Você gostaria de ser reconhecido como um líder em sua comunidade ou no trabalho?",
      options: ["Sim, isso seria incrível", "Talvez, dependendo da oportunidade", "Não, não é meu objetivo"],
      image: lider,
    },
    // Perguntas sobre Interesse pela Solução
    {
      title: "Você está interessado em aprender como alcançar confiança, propósito e sucesso?",
      options: ["Sim, quero aprender mais", "Talvez, dependendo do conteúdo"],
      image: "https://example.com/aprender.jpg",
    },
    {
      title: "Você está pronto para transformar sua vida com as estratégias que oferecemos?",
      options: ["Sim, estou preparado", "Preciso de mais informações antes"],
      image: "https://example.com/transformação.jpg",
    }
  ];

  const handleOptionClick = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Redirecionar para a página de vendas ou mostrar mensagem final
      window.location.href = "/";
    }
  };

  return (
    <QuizContainer>
      <ProgressBar>
        <Progress progress={(step + 1) / questions.length * 100} />
      </ProgressBar>
      <QuestionTitle>{questions[step].title}</QuestionTitle>
      {questions[step].options.map((option, index) => (
        <OptionButton key={index} onClick={handleOptionClick}>
          {option}
        </OptionButton>
      ))}
      {questions[step].image && <QuestionImage src={questions[step].image} alt="question related" />}
    </QuizContainer>
  );
};

export default Quiz;
