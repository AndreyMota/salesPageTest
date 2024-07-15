import React, { useEffect, useRef } from 'react';
import styled, {keyframes} from 'styled-components';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import meuvideo from '/7DiasDeGarantia720x1920.mp4';
import wojack from '/tiredWojack-removebg.png';
import Carousel from '../../../Components/Carousel.jsx';
import artwork from '/artwork.png';
import ogim from '/ogim.png';
import { Helmet } from 'react-helmet-async';
import CTAButton from '../../../Components/CTAButton.jsx';


// Styled Components
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto; 
  padding: 20px;
  color: #E0E0E0;
`;

const ContainerCabecalho = styled.div`
  max-width: 100%;
  background-image: url(${artwork});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* margin: 0 auto; */
  padding: 20px;
  color: #E0E0E0;
`;

const Headline = styled.h1`
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
  color: #BB86FC;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  opacity: 0;
  transform: translateY(50px);
  animation: ${fadeIn} 1s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Subheadline = styled.h2`
  font-size: 1.75em;
  text-align: center;
  margin-bottom: 40px;
  color: #BB86FC;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  opacity: 0;
  transform: translateY(50px);
  animation: ${fadeIn} 1s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const Section = styled.section`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* Centraliza o texto dentro da seção */
  opacity: 0;
  transform: translateY(50px);
  animation: ${fadeIn} 1s ease-out forwards;
`;


const VideoWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    width: 100%;
    height: auto;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  line-height: 1.6;
`;

// Estilização adicional para destacar as listas
export const HighlightedList = styled(List)`
  background-color: #1F1F1F;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  display: inline-block;
  max-width: 700px;
`;

const SectionTitle = styled.h2`
  font-size: 1.75em;
  text-align: center;
  margin-bottom: 20px;
  color: #BB86FC;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const FAQItem = styled.div`
  margin: 20px 0;
`;

const FAQQuestion = styled.h3`
  font-size: 1.2em;
  color: #BB86FC;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const FAQAnswer = styled.p`
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.4rem; /* Tamanho para telas maiores */
  font-weight: 500; /* Peso da fonte mais forte */
  color: #CCFF00; /* Cor mais forte para o texto */
  margin-bottom: 10px; /* Exemplo de espaçamento inferior */
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Reduz o tamanho da fonte para telas menores */
  }
`;

const SalePage = () => {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se os elementos são visíveis na tela
      if (headlineRef.current && isElementInViewport(headlineRef.current)) {
        headlineRef.current.style.opacity = 1;
        headlineRef.current.style.transform = 'translateY(0)';
      }

      if (subheadlineRef.current && isElementInViewport(subheadlineRef.current)) {
        subheadlineRef.current.style.opacity = 1;
        subheadlineRef.current.style.transform = 'translateY(0)';
      }

      if (sectionRef.current && isElementInViewport(sectionRef.current)) {
        sectionRef.current.style.opacity = 1;
        sectionRef.current.style.transform = 'translateY(0)';
      }
    };

    // Adiciona um listener de scroll
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função auxiliar para verificar se o elemento está visível na tela
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      video.pause();
      video.currentTime = video.duration;
    };

    if (video) {
      video.addEventListener('ended', handleEnded);

      // Autoplay the video when component mounts
      video.play();

      return () => {
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  const testimonials = [
    {
      message: "Eu estava perdido, sem direção, mas depois de ler 'Masculinidade Magnética', minha vida mudou completamente. Agora, acordo todos os dias com um propósito claro e uma confiança renovada. Recomendo a todos os homens que querem transformar suas vidas.",
      author: 'Anônimo'
    },
    {
      message: "Este eBook me deu as ferramentas que eu precisava para superar minhas inseguranças e melhorar meus relacionamentos. Minha vida financeira também nunca esteve tão organizada. Um investimento que valeu cada centavo.",
      author: 'João P., Consultor Financeiro'
    },
    {
      message: "A combinação de sabedoria antiga e estratégias modernas é simplesmente brilhante. 'Masculinidade Magnética' é um guia essencial para qualquer homem que queira alcançar o sucesso e a realização.",
      author: 'Roberto L., Líder de Equipe'
    },
    {
      message: "Eu realmente não achava que o livro tinha tanto conteúdo útil, comprei incredulo, já tinha gastado dinheiro com vários cursos de 'gurus da sedução', mas nenhum deles conseguiu realmente abrir meus olhos e dar uma direção. Ainda uso o livro para consultas de vez em quando.",
      author: 'Marcelo C., Programador'
    }
  ];
  

  return (
    <>
    {/* <Helmet>
    <title>Masculinidade Magnética - Transforme sua Vida Hoje</title>
    <meta name="description" content="Um guia prático para superar inseguranças, atrair mulheres e alcançar seu potencial máximo." />
    <meta name="keywords" content="masculinidade, confiança, autoajuda, desenvolvimento pessoal, relacionamentos, sucesso financeiro" />
    <meta property="og:title" content="Masculinidade Magnética - Transforme sua Vida Hoje" />
    <meta property="og:description" content="Um guia prático para superar inseguranças, atrair mulheres e alcançar seu potencial máximo." />
    <meta property="og:image" content="URL_DA_SUA_IMAGEM" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Masculinidade Magnética - Transforme sua Vida Hoje" />
    <meta name="twitter:description" content="Um guia prático para superar inseguranças, atrair mulheres e alcançar seu potencial máximo." />
    <meta name="twitter:image" content="URL_DA_SUA_IMAGEM" />
    </Helmet> */}

    
    <ContainerCabecalho>
      <Headline ref={headlineRef}>Descubra o Poder de uma Masculinidade Confiante e Transformadora</Headline>
      <Subheadline ref={subheadlineRef}>Um guia prático para superar inseguranças, atrair mulheres e alcançar seu potencial máximo</Subheadline>
    </ContainerCabecalho>
    <Container>
      <Section ref={sectionRef}>
        <SectionTitle>Masculinidade Magnética - Transforme sua Vida Hoje</SectionTitle>
        <p><strong>Descubra a Chave para a Confiança Inabalável e o Sucesso Duradouro: </strong><br/> <br/> 
Você já se sentiu perdido, sem direção, lutando para encontrar seu propósito?<br/><br/> Você não está sozinho. Muitos homens enfrentam desafios semelhantes diariamente. <br/><br/> Imagine um mundo onde você é verdadeiramente autoconfiante, onde cada passo que você dá é cheio de propósito e direção.<br/><br/>

Esse mundo não está fora do seu alcance. Está a poucos passos, com <strong>Masculinidade Magnética.</strong></p>
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>Por Que Este eBook é Diferente?</SectionTitle>
        <p>Nosso eBook de 200+ páginas oferece um guia completo para você se tornar o homem que sempre quis ser.</p>
        <HighlightedList>
          <li><strong>Segredos Ancestrais:</strong> Aprenda com mestres antigos e modernos - de Platão a Tony Robbins - e aplique sua sabedoria para uma transformação real.</li>
          <li><strong>Soluções Comprovadas:</strong> Estratégias testadas e comprovadas para superar inseguranças e construir relacionamentos fortes e saudáveis.</li>
          <li><strong>Propósito de Vida:</strong> Ferramentas práticas para descobrir seu verdadeiro propósito e viver uma vida com significado.</li>
          <li><strong>Sucesso Financeiro:</strong> Conselhos práticos para gerenciar suas finanças e construir riqueza de forma sustentável.</li>
          <li><strong>Liderança Eficaz:</strong> Desenvolva habilidades de liderança que inspiram e influenciam, tanto na vida pessoal quanto na profissional.</li>
        </HighlightedList>
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>Você Reconhece Estes Sentimentos?</SectionTitle>
        <img src={wojack} width={200} height={200}></img>
        <p>“Eu sinto que estou à deriva, sem um propósito claro.”</p>
        <p>“Minha confiança está sempre oscilando, nunca me sinto seguro de mim mesmo.”</p>
        <p>“Meus relacionamentos são uma constante luta, nada parece dar certo.”</p>
        <p>“Finanças? Estou sempre no vermelho, sem saber para onde vai meu dinheiro.”</p>
        <p>“Gostaria de ser um líder, mas não sei por onde começar.”</p>
        <p>“Minha saúde física e mental está sempre em segundo plano, estou exausto.”</p>
        <p>Esses são os desafios que "Masculinidade Magnética" foi projetado para resolver. <strong>Você não precisa enfrentar essas batalhas sozinho.</strong></p>
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>
        Uma Nova Perspectiva
        </SectionTitle>
        <p>Eu entendo onde você está agora.<br/><br/>
          A sensação de estar perdido, de não ser bom o suficiente, de lutar para encontrar um propósito verdadeiro. 
          <br/><br/>Já estive lá. Muitos dos homens que conhecemos enfrentam essa luta.
          <br/> Mas e se eu lhe dissesse que essa <strong>sensação de vazio</strong> pode ser transformada em <strong>confiança e clareza</strong>?</p>
        <p><strong>Imagine uma Vida Diferente</strong></p>
        <HighlightedList>
          <li>Imagine acordar todos os dias com um propósito claro, sabendo exatamente para onde está indo.</li>
          <li>Imagine se sentir inabalável em sua confiança, capaz de enfrentar qualquer desafio que a vida lhe apresente.</li>
          <li>Imagine construir relacionamentos que são fonte de força e alegria, e não de estresse e frustração.</li>
          <li>Imagine <strong>não se preocupar com dinheiro</strong>, com um plano claro para alcançar segurança e sucesso financeiro.</li>
          <li>Imagine ser o líder que sempre desejou ser, inspirando e influenciando os outros de forma positiva.</li>
          <li>Imagine estar em sua melhor forma física e mental, equilibrado e energizado.</li>
        </HighlightedList>
        <p>Essas não são apenas ilusões. <strong>Essa é a realidade que "Masculinidade Magnética" pode ajudar você a alcançar.</strong></p>
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>O Que Nossos Leitores Estão Falando</SectionTitle>
        <Carousel testimonials={testimonials} />
      </Section>
      <CTAButton link={"https://pay.kiwify.com.br/iiVz3P0"}>COMPRE AGORA POR R$33,70 - OFERTA PARA NOVOS LEITORES!</CTAButton>

      <Section ref={sectionRef}>
        <SectionTitle>Tudo Que Você Precisa Saber</SectionTitle>
        <p>"Masculinidade Magnética" é o seu guia completo para transformar sua vida. <br/><br/>Com este eBook, você aprenderá a:</p>
        <StyledParagraph>-Construir uma confiança inabalável. <br/><br/>
-Descobrir e seguir seu verdadeiro propósito. <br/><br/>
-Melhorar suas habilidades de relacionamento.<br/><br/>
-Gerenciar suas finanças de forma eficaz.<br/><br/>
-Desenvolver habilidades de liderança.<br/><br/>
-Cuidar da sua saúde física e mental.
        </StyledParagraph>
        <Section ref={sectionRef}>
        <VideoWrapper>
          <video ref={videoRef} width="800" height="300" autoPlay muted playsInline>
            <source src={meuvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoWrapper>
      </Section>
        <CTAButton link={"https://pay.kiwify.com.br/iiVz3P0"}>COMPRE AGORA POR R$33,70 - OFERTA DE RELANÇAMENTO!</CTAButton>
        <p><strong>Oferta Especial - Não Perca Essa Oportunidade!</strong><br/><br/>
De <s><span style={{ color: '#FF0000' }}>R$55,90 </span></s>
 por apenas <u><span style={{ color: '#00FF00' }}>R$33,70</span></u> | <strong>39% de desconto!</strong> <br/><br/>- Essa é a sua chance de obter "Masculinidade Magnética" com um desconto exclusivo de lançamento.<br/><br/> A promoção é válida até 18 de julho de 2024. Após essa data, o preço volta ao valor original.</p>
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>A Escolha Agora É Sua</SectionTitle>
        <p>Você tem duas opções neste momento:</p>
        <HighlightedList>
          <li>1. Continuar no Caminho Atual: Continuar enfrentando os mesmos desafios, lutando com inseguranças, falta de propósito, dificuldades financeiras e relacionamentos problemáticos. É um caminho difícil e solitário.</li>
          <li>2. Escolher a Transformação: Investir em "Masculinidade Magnética" hoje e começar sua jornada para uma vida de confiança, propósito e sucesso. É um caminho que leva à realização e ao equilíbrio.</li>
        </HighlightedList>
        <p>A escolha é sua.<br/> Você pode continuar lutando contra os mesmos problemas ou pode dar o primeiro passo em direção à vida que sempre desejou.<br/> Clique no botão abaixo e transforme sua vida com "Masculinidade Magnética".</p>
      </Section>
      <CTAButton link={"https://pay.kiwify.com.br/iiVz3P0"}>Quero Adquirir Meu eBook Com 39% de Desconto Agora!</CTAButton>

      <Section ref={sectionRef}>
        <SectionTitle>Por que funciona?</SectionTitle>
        <p>"Masculinidade Magnética" é baseado em anos de pesquisa e práticas comprovadas. Ele combina sabedoria antiga e estratégias modernas para oferecer um guia prático e eficiente.</p>
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>Como funciona?</SectionTitle>
        <p>O eBook oferece um plano passo a passo para você desenvolver suas habilidades e transformar sua vida. Cada capítulo aborda uma área essencial do autodesenvolvimento masculino, com técnicas práticas e exercícios.</p>
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>Para quem é?</SectionTitle>
        <p>Este eBook é para qualquer homem que deseja melhorar sua vida, superar inseguranças e se tornar mais confiante e bem-sucedido.</p>
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>O que você receberá:</SectionTitle>
        <List>
          <li>eBook "Masculinidade Magnética" (200+ páginas)</li>
        </List>
        <p>De R$ 55,90 por apenas R$ 33,70!</p>
        <CTAButton link={"https://pay.kiwify.com.br/iiVz3P0"}>Quero Adquirir Meu eBook Com 39% de Desconto Agora!</CTAButton>
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>Garantia</SectionTitle>
        <p>Oferecemos uma garantia de 7 dias. Se você não estiver satisfeito, devolvemos seu dinheiro.</p>
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>FAQ</SectionTitle>
        <FAQItem>
          <FAQQuestion>Por onde eu irei receber o produto?</FAQQuestion>
          <FAQAnswer>O Masculinidade Magnética é um livro digital, em formato de PDF, você receberá o ebook dentro da sua caixa de Email.</FAQAnswer>
        </FAQItem>
        <FAQItem>
          <FAQQuestion>Quanto tempo leva para ver os resultados?</FAQQuestion>
          <FAQAnswer>Os resultados variam, mas muitos clientes relatam melhorias em poucas semanas.</FAQAnswer>
        </FAQItem>
        <FAQItem>
          <FAQQuestion>O eBook é adequado para todas as idades?</FAQQuestion>
          <FAQAnswer>Sim, é adequado para homens de todas as idades que desejam melhorar suas vidas.</FAQAnswer>
        </FAQItem>
        <FAQItem>
          <FAQQuestion>Posso acessar o eBook em qualquer dispositivo?</FAQQuestion>
          <FAQAnswer>Sim, o eBook está disponível em formato PDF, compatível com todos os dispositivos.</FAQAnswer>
        </FAQItem>
      </Section>

      <CTAButton link={"https://pay.kiwify.com.br/iiVz3P0"}>Aproveite o Desconto de 39% Agora</CTAButton>
    </Container>
    </>
  );
};

export default SalePage;
