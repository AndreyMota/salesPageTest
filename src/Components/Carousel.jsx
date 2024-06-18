import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Styled Components para o Carrossel
const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

const CarouselItem = styled.div`
  min-width: 100%;
  flex: 1;
  opacity: ${({ isCurrent }) => (isCurrent ? '1' : '0.5')};
  transition: opacity 0.5s ease-in-out;
  text-align: center;
`;

const Testimonial = styled.div`
  background-color: #1F1F1F;
  padding: 20px 50px;
  border-radius: 10px;
  margin: 10px;
  color: #E0E0E0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
`;

const Author = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: #BB86FC;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #BB86FC;
  border: none;
  color: #121212;
  font-size: 1.5em;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;

  &:hover {
    background-color: #9E6EDC;
  }

  ${({ direction }) => (direction === 'prev' ? 'left: 10px;' : 'right: 10px;')}
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Carousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Função para passar para o slide anterior
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? testimonials.length - 1 : currentIndex - 1);
    resetInterval();
  };

  // Função para passar para o próximo slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    resetInterval();
  };

  // Função para reiniciar o intervalo de autorrolagem
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
  };

  // Configuração do intervalo de autorrolagem ao montar o componente
  useEffect(() => {
    resetInterval();
    // Limpar o intervalo ao desmontar o componente
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <CarouselContainer>
      <CarouselWrapper currentIndex={currentIndex}>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} isCurrent={index === currentIndex}>
            <Testimonial>
              {testimonial.message}
              <Author>{testimonial.author}</Author>
            </Testimonial>
          </CarouselItem>
        ))}
      </CarouselWrapper>
      <NavigationButton direction="prev" onClick={prevSlide}>
        &#10094;
      </NavigationButton>
      <NavigationButton direction="next" onClick={nextSlide}>
        &#10095;
      </NavigationButton>
    </CarouselContainer>
  );
};

export default Carousel;
