import React, { useEffect, useRef } from 'react';
import styled, {keyframes} from 'styled-components';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import meuvideo from '/criativoSp.mp4';
import wojack from '/tiredWojack-removebg.png';
import Carousel from '../../Components/Carousel.jsx';
import artwork from '/mainBG.jpg';
import ogim from '/ogim.png';
import { Helmet } from 'react-helmet';
import CTAButton from '../../Components/CTAButton.jsx';
import m from '/M.png';
import pic1 from '/testimonials/pic1.jpg';


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
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto; 
  padding: 20px;
  color: #E0E0E0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 20px;
  color: #E0E0E0;
  box-shadow: 0 25px 20px rgba(128, 0, 128, 0.2); /* Sombra roxa para iluminação de fundo */
`;



const Headline = styled.h1`
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
  background-image: linear-gradient(to right, #008df2, #00a4fa, #00b9f9, #00ccf3, #00ddeb);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.8), 0 0 5px rgba(255, 255, 255, 0.5);
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
  background-image: linear-gradient(to right, #00c6ff, #0072ff); /* Gradiente semelhante ao do Headline */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.8), 0 0 3px rgba(255, 255, 255, 0.5); /* Sombra suave */
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
  max-width: 900px;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* Centraliza o texto dentro da seção */
  opacity: 0;
  transform: translateY(50px);
  animation: ${fadeIn} 1s ease-out forwards;
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 20px 0;
  }
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
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
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

const Footer = styled.footer`
  background-color: #333; /* Cor de fundo escura para destaque */
  color: #fff; /* Cor do texto branco para contraste */
  text-align: center; /* Centraliza o texto */
  padding: 20px; /* Espaçamento interno */
  /* Fixa o rodapé na parte inferior da página */
  /* Largura total da página */
  font-size: 0.9em; /* Tamanho da fonte um pouco menor */
`;

const FooterText = styled.p`
  margin: 5px 0; /* Margem mínima para espaçamento entre parágrafos */
`;

const Highlight = styled.span`
  color: #ff9900; /* Cor laranja para destacar */
  font-weight: bold; /* Negrito para ênfase */
`;

const SalePage = () => {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Código do Facebook Pixel
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1673271866809298');
    fbq('track', 'PageView');
  }, []);

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
      message: "É incrível como mulheres começam a aparecer quando você decide focar em si mesmo. Depois que parei de correr atrás delas, parece que fiquei mais atraente, quase toda semana alguma mina me dá bola.",
      author: "Anônimo"
    },
    {
      message: "Esse livro me deu as ferramentas que eu precisava, minha vida financeira também nunca esteve tão organizada. Um investimento que valeu cada centavo.",
      author: 'João P., Pintor',
    },
    {
      message: "A combinação de sabedoria antiga e estratégias modernas é simplesmente brilhante. 'Masculinidade Magnética' é um guia essencial para qualquer homem que queira alcançar o sucesso e a realização.",
      author: 'Roberto M., Líder de Equipe'
    },
    {
      message: "Eu realmente não achava que o livro tinha tanto conteúdo útil, comprei incrédulo, já tinha gastado dinheiro com vários cursos de 'gurus da sedução' [..], mas nenhum deles conseguiu realmente abrir meus olhos e dar uma direção. TMJ MAX! (Ainda uso o livro para consultas de vez em quando).",
      author: 'Marcelo C., Programador'
    },
    {
      message: "Depois de ler Masculinidade Magnética, minha confiança disparou. Não só as mulheres começaram a notar, mas eu também consegui uma promoção no trabalho.",
      author: "João A., Gerente"
    },
    {
      message: "Conheci minha amada durante a minha jornada de autodesenvolvimento. Ela chegou pra mim no momento certo e transformou minha vida para melhor. Obirgado Max por escrever essa peça",
      author: "Matheus S., Empreendedor"
    },
    {
      message: "Cara, eu sempre fui muito tímido e fechado, tinha um ou dois amigos na escola e nunca tive coragem de chegar em uma menina. O tempo passou, e eu cheguei aos [**] anos sem nunca ter pegado ngm. Seu livro foi um pontape pra eu sair de casa. Tava começando a facul e fiz novos amigos, conh...",
      author: "Elias D., Cursa arquitetura",
    },
    {
      message: "Envie você também o seu relato por email pra gente bater um papo!",
      author: "Max Strong"
    },
    {
      message: "Eu demorei pra ver algum resultado. Diferente do que a maioria acha, esse livro não é sobre pegar mulher. É sobre autoconhecimento e desenvolvimento. Mulheres vem e vão, ser atraente é só uma consequência de focar em si. O maior resultado é conseguir ficar sozinho e evitar interesseira...",
      author: "Josué P., Cursa ADS",
    },
  ];
  
  

  return (
    <>
    <Helmet>
    <title>MascMag - Transforme a sua vida ainda hoje</title>
    <link rel="icon" href={m} />
    <meta name="description" content="Um guia prático para superar inseguranças, atrair mulheres e alcançar seu potencial máximo." />
    <meta name="keywords" content="masculinidade, confiança, autoajuda, desenvolvimento pessoal, relacionamentos, sucesso financeiro" />
    <meta property="og:title" content="Masculinidade Magnética - Transforme sua Vida Hoje" />
    <meta property="og:description" content="Um guia prático para superar inseguranças, atrair mulheres e alcançar seu potencial máximo." />
    <meta property="og:image" content="URL_DA_SUA_IMAGEM" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Masculinidade Magnética - Transforme sua Vida Hoje" />
    <meta name="twitter:description" content="Um guia prático para superar inseguranças, atrair mulheres e alcançar seu potencial máximo." />
    <meta name="twitter:image" content="URL_DA_SUA_IMAGEM" />
    </Helmet>

    
    <ContainerCabecalho>
      <Headline ref={headlineRef}>Transforme-se no Homem que Elas Desejam</Headline>
      <Subheadline ref={subheadlineRef}>Domine a arte da atração natural e melhore todos os aspectos da sua vida</Subheadline>
    </ContainerCabecalho>
    <Container>
    <CTAButton>Comece Sua Jornada</CTAButton>
      <Section ref={sectionRef}>
        <SectionTitle>Quer Continuar Assim?</SectionTitle>
        <p><strong>Você Não Cansa de Correr Atrás Para Receber Atenção?</strong><br/><br/>
        Você sabe como é se esforçar para conquistar a atenção de uma mulher. Mas parece que quanto mais você se esforça, <strong>menos elas te querem</strong>.<br/><br/>
        Talvez você se pergunte por quê alguns homens conseguem atrair mulheres sem esforço enquanto <strong style={{color: 'red'}}>você vira amiguinho</strong>.<br/><br/>
        A verdade é que a atenção feminina não é dada aos que se esforçam <strong style={{color: 'red'}}>desesperadamente</strong>. Ela vai para aqueles que estão focados em si mesmos e em suas próprias jornadas.<br/><br/>
        <strong>Esse é o Segredo:</strong> Parar de focar <strong style={{color: 'yellow'}}>NELAS</strong>. Elas não querem ser seu objetivo de vida. Não importa o que elas digam, a verdade é uma só: <strong style={{color: 'red'}}>Elas querem</strong> os homens que almejam o topo. Elas querem a emoção de chegar ao topo junto deles.
        </p>
        <CTAButton>Transforme Sua Vida Agora</CTAButton>
      </Section> 

      <Section ref={sectionRef}>
        <SectionTitle>Uma Nova Perspectiva</SectionTitle>
        <p><strong><strong style={{color: 'yellow'}}>Ou</strong> Você Está no Topo <strong style={{color: 'yellow'}}>Ou</strong> Quer Estar <strong style={{color: 'yellow'}}>Ou</strong>  Vira a Segunda (Terceira, Quarta...) <strong style={{color: 'red'}}>Opção</strong>.</strong><br/><br/>
          Mas eu entendo onde você está agora.<br/><br/>
          A sensação de ser constantemente ignorado e de se sentir inferior<br/><br/>
          Mas e se eu te dissesse que essa <strong>sensação de rejeição</strong> pode ser transformada em <strong>confiança</strong>?<br/><br/>
        </p>
        <p><strong>Imagine uma Vida Diferente</strong></p>
        <p style={{textAlign: 'justify'}}>
        <strong style={{color: 'yellow'}}>Imagine</strong> ser o centro das atenções em qualquer ambiente, sem esforço algum.<br/>
        <strong style={{color: 'yellow'}}>Imagine</strong> ter mulheres atraídas por você naturalmente, sem precisar correr atrás.<br/>
        <strong style={{color: 'yellow'}}>Imagine</strong> dominar suas finanças, com investimentos inteligentes que garantem sua liberdade financeira.<br/>
        <strong style={{color: 'yellow'}}>Imagine</strong> ter uma aparência que faz cabeças virarem e pessoas comentarem sobre sua boa forma física.<br/>
        <strong style={{color: 'yellow'}}>Imagine</strong> acordar todos os dias com uma energia inesgotável, pronto para conquistar o mundo.<br/>
        </p>

        <p>Pode parecer rídiculo. Mas essa é uma realidade com muitas vantagens, que você pode viver se quiser. <br/><br/>E <strong>Masculinidade Magnética</strong> pode te ajudar a alcançar.</p>
        
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>Por Que Este Livro é Diferente?</SectionTitle>
        <p>Nosso eBook de <strong>200+ páginas</strong> oferece um guia completo para você se tornar o homem que sempre quis ser.</p>
        <HighlightedList>
        

          <li>
            <strong style={{
  color: '#39ff14', // Verde fluorescente
  textShadow: `0 0 0px #39ff14, 0 0 6px #39ff14, 0 0 9px #39ff14, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000`
}}>Atração Natural</strong>: Descubra como a verdadeira confiança e um propósito forte transformam você em um imã para mulheres.</li>
          <li>
            <strong style={{
  color: '#39ff14', // Verde fluorescente
  textShadow: `0 0 0px #39ff14, 0 0 6px #39ff14, 0 0 9px #39ff14, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000`
}}>Construção de Relacionamentos</strong>: Estratégias práticas para construir conexões genuínas e duradouras com mulheres.</li>
          <li>
            <strong style={{
  color: '#39ff14', // Verde fluorescente
  textShadow: `0 0 0px #39ff14, 0 0 6px #39ff14, 0 0 9px #39ff14, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000`
}}>Propósito de Vida</strong>: Encontre e siga seu verdadeiro propósito, atraindo mulheres que querem fazer parte da sua jornada.</li>
          <li>
            <strong style={{
  color: '#39ff14', // Verde fluorescente
  textShadow: `0 0 0px #39ff14, 0 0 6px #39ff14, 0 0 9px #39ff14, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000`
}}>Sucesso em Todos os Campos</strong>: Gerencie suas finanças, melhore sua saúde e desenvolva habilidades de liderança que impressionam a todos.</li>
          <li>
            <strong style={{
  color: '#39ff14', // Verde fluorescente
  textShadow: `0 0 0px #39ff14, 0 0 6px #39ff14, 0 0 9px #39ff14, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000`
}}>Confiança Inabalável</strong>: Supere inseguranças e torne-se o homem que você e as mulheres admiram.</li>
          <li>
          <strong style={{
  color: '#39ff14', // Verde fluorescente
  textShadow: `0 0 0px #39ff14, 0 0 6px #39ff14, 0 0 9px #39ff14, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000`
}}>Segredos Ancestrais</strong>: Aprenda com mestres antigos e modernos - de Platão a Tony Robbins - e aplique sua sabedoria para uma transformação real.</li>
        </HighlightedList>
      </Section>


      {/* <Section ref={sectionRef}>
        <SectionTitle>Você Reconhece Estes Sentimentos?</SectionTitle>
        <img src={wojack} width={200} height={200}></img>
        <p>“Eu sinto que estou sempre à margem, nunca sendo o centro da atenção delas”</p>
        <p>“Minha confiança desmorona quando estou perto de mulheres atraentes.”</p>
        <p>“Meus relacionamentos são uma constante luta, nada parece dar certo.”</p>
        <p>“Parece que minha vida está estagnada, sem direção ou propósito.”</p>
        <p>“Finanças? Estou sempre no vermelho, sem saber para onde vai meu dinheiro.”</p>
        <p>Esses são os desafios que "Masculinidade Magnética" foi projetado para resolver. <strong>Você não precisa mais enfrentar esses problemas sozinho.</strong></p>
      </Section> */}

      <Section ref={sectionRef}>
        <SectionTitle>O Que Nossos Leitores Estão Falando</SectionTitle>
        <Carousel testimonials={testimonials} />
        <Section ref={sectionRef}>
        <VideoWrapper>
          <video ref={videoRef} width="800" height="300" autoPlay muted playsInline>
            <source src={meuvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoWrapper>
        <p>Masc Mag te mostra o caminho para o constante desenvolvimento, enquanto <strong>O Segredo Da Atração Genuína</strong> te mostra em 6 lições como atrair verdadeiramente uma mulher</p>
        </Section>
        <CTAButton link={"https://pay.kiwify.com.br/iiVz3P0"}>COMPRE AGORA POR R$19,90 - OFERTA DE RELANÇAMENTO</CTAButton>
        <p><strong>Oferta Especial - Não Perca Essa Oportunidade</strong><br/><br/>
De <span style={{ color: '#FF0000' }}>R$33,70 </span>
 por apenas <u><span style={{ color: '#00FF00' }}>R$19,90</span></u> | <strong>47% de Desconto! | +BÔNUS</strong> <br/><br/>- Essa é a sua chance de obter Masculinidade Magnética com um desconto exclusivo de relançamento.<br/><br/> A promoção é válida por tempo <strong>LIMITADO</strong></p>
      </Section>

      <Section ref={sectionRef}>
        <SectionTitle>Tudo Que Você Precisa Saber</SectionTitle>
        <p>Masculinidade Magnética é o seu guia completo para o autoaperfeiçoamento <br/><br/>Com este guia, você aprenderá a:</p>
        <StyledParagraph>-Construir uma confiança inabalável. <br/><br/>
        -Atrair sem esforço. <br/><br/>
-Descobrir e seguir seu verdadeiro propósito. <br/><br/>
-Melhorar suas habilidades de relacionamento.<br/><br/>
-Gerenciar suas finanças de forma eficaz.<br/><br/>
-Desenvolver habilidades de liderança.<br/><br/>
-Cuidar da sua saúde física e mental.
        </StyledParagraph>
      </Section>
      <CTAButton link={"https://pay.kiwify.com.br/iiVz3P0"}>COMPRE AGORA POR R$19,90 - OFERTA PARA NOVOS LEITORES!</CTAButton>

      <Section ref={sectionRef}>
        <SectionTitle>A Escolha Agora É Sua</SectionTitle>
        <p>Você tem duas opções neste momento:</p>
        <HighlightedList>
          <li><strong style={{
  color: '#ff0000', // Vermelho
  textShadow: `
    0 0 1px #ff0000, 0 0 6px #ff0000, 0 0 9px #ff0000, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000`
}}>
1. Continuar no Caminho Atual</strong>: Continuar enfrentando os mesmos desafios, lutando com inseguranças, falta de propósito, dificuldades financeiras e relacionamentos problemáticos e desinteresse.</li>
          <li><strong style={{
  color: '#39ff14', // Verde fluorescente
  textShadow: `0 0 1px #39ff14, 0 0 6px #39ff14, 0 0 9px #39ff14, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000`
}}>
2. Escolher a Transformação</strong>: Investir em Masculinidade Magnética hoje <strong style={{
  color: '#39ff14', // Verde fluorescente
  textShadow: `0 0 0px #39ff14, 0 0 6px #39ff14, 0 0 9px #39ff14, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000`
}}>(+BÔNUS)</strong> e começar sua jornada para uma vida de confiança, propósito e sucesso. É um caminho que leva à realização e ao equilíbrio.</li>
        </HighlightedList>
        <p><strong style={{
  color: '#ff0000', // Vermelho
  textShadow: `
    0 0 1px #ff0000, 0 0 6px #ff0000, 0 0 9px #ff0000, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000`
}}>A escolha é sua.</strong><br/> Você pode continuar lutando contra os mesmos demônios ou pode dar o primeiro passo em direção à vida que sempre desejou.<br/> <strong style={{color: 'yellow'}}>Clique no botão abaixo</strong> e transforme sua vida com Masculinidade Magnética.</p>
      </Section>
      <CTAButton link={"https://pay.kiwify.com.br/iiVz3P0"}>Quero Adquirir Meu eBook Com 47% de Desconto Agora!</CTAButton>

      <Section ref={sectionRef}>
        <SectionTitle>Por Que Isso Funciona?</SectionTitle>
        <p>Masculinidade Magnética não é apenas um eBook. É um programa completo baseado em:</p>
        <HighlightedList>
          <li><strong>Psicologia do Desenvolvimento Masculino:</strong> Técnicas baseadas em como os homens realmente crescem e se transformam.</li>
          <li><strong>Experiência Pessoal e Profissional:</strong> Insights que vêm de anos de experiência ajudando homens a alcançar seu potencial.</li>
          <li><strong>Resultados Comprovados:</strong> Testemunhos de homens que usaram essas estratégias para transformar suas vidas.</li>
          <li><strong>Praticidade e Ação:</strong> Ferramentas práticas e estratégias acionáveis que você pode começar a usar imediatamente.</li>
        </HighlightedList>
        <p>Não é sobre teorias ou promessas vazias. É sobre transformação real e tangível.</p>
        <CTAButton link={"https://pay.kiwify.com.br/iiVz3P0"}>Quero Acelerar Meu Desenvolvimento!</CTAButton>
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

      <CTAButton link={"https://pay.kiwify.com.br/iiVz3P0"}>Aproveite o Desconto de 47% Agora</CTAButton>
    </Container>
    <Footer>
      <FooterText>© 2024 <Highlight>Max Strong</Highlight>. Todos os direitos reservados.</FooterText>
      <FooterText>“<Highlight>Masculinidade Magnética</Highlight>” - Sua Transformação Começa Agora</FooterText>
    </Footer>
    </>
  );
};

export default SalePage;
