import React from 'react';
import styled from 'styled-components';

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

const Quiz = () => {
  const [step, setStep] = React.useState(0);

  const questions = [
    {
      title: "Para começar, selecione sua faixa etária:",
      options: ["Menos de 18 anos", "Entre 18-30 anos", "Mais de 30 anos"],
    }, /* Segunda etapa: Perguntas sobre problemas/dores */
    {
      title: "Você sente que está lutando para encontrar um propósito na vida?",
      options: ["Sim, frequentemente", "Às vezes", "Raramente"],
    },
    {
      title: "Você se sente inseguro em suas relações sociais?",
      options: ["Sim, muitas vezes", "Ocasionalmente", "Não, me sinto confiante"],
    },
    {
      title: "Como está sua situação financeira atualmente?",
      options: ["Estou sempre preocupado com dinheiro", "Consigo gerenciar, mas com dificuldade", "Estou bem financeiramente"],
    },
    {
        title: "Você sente que falta direção em sua carreira?",
        options: ["Sim, estou perdido", "Tenho algumas ideias, mas não muita clareza", "Não, tenho objetivos muito claros"],
    },
    {
        title: "Como você avalia sua saúde mental atualmente?",
        options: ["Estou sempre estressado e ansioso", "Tenho alguns dias de paz", "Me sinto equilibrado e em paz"],
    }, // Terceira etapa: Perguntas sobre sonhos/desejos
    {
        title: "Como você se sentiria ao acordar todos os dias com um propósito claro?",
        options: ["Inspirado e energizado", "Motivado, mas com algumas dúvidas", "Não vejo muita diferença"],
    },
    {
        title: "Qual seria o impacto de ter confiança inabalável em sua vida?",
        options: ["Transformaria completamente minha vida", "Seria muito positivo", "Não acho que faria grande diferença"],
    },
    {
        title: "Como seria viver em relacionamentos saudáveis e sem estresse?",
        options: ["Seria uma grande mudança positiva", "Melhoraria, mas não é uma prioridade", "Estou satisfeito com meus relacionamentos atuais"],
    },
    {
        title: "Como você se sentiria ao ter controle total sobre suas finanças?",
        options: ["Aliviado e seguro", "Melhoraria um pouco, mas não é crítico", "Já me sinto no controle"],
    },
    {
        title: "Você gostaria de ser reconhecido como um líder em sua comunidade ou no trabalho?",
        options: ["Sim, seria incrível", "Talvez, se eu tiver a oportunidade", "Não é algo que me interessa"],
    }, //Etapa 4: Perguntas sobre interesse na solução
    {
        title: "Você gostaria de aprender como alcançar todos esses benefícios?",
        options: ["Sim, estou interessado", "Talvez, gostaria de saber mais"],
    },
    {
        title: "Está pronto para transformar sua vida com as estratégia eu eu vou te mostrar?",
        options: ["Sim, estou preparado", "Preciso de mais informações"],
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
      <QuestionTitle>{questions[step].title}</QuestionTitle>
      {questions[step].options.map((option, index) => (
        <OptionButton key={index} onClick={handleOptionClick}>
          {option}
        </OptionButton>
      ))}
    </QuizContainer>
  );
};

export default Quiz;
