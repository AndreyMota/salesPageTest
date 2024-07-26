import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Styled Components para o Carrossel
const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  

  @media (max-width: 768px) {
    width: calc(100% - 20px); /* Adiciona um pequeno padding nas laterais */
    max-width: 100%;
    min-width: unset;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  width: ${({ itemCount }) => `${itemCount * 100}%`}; /* Ajusta a largura do wrapper com base no número de itens */
  
  @media (max-width: 768px) {
    padding-right: 20px;
  }
`;

const CarouselItem = styled.div`
  min-width: 100%;
  flex: 1;
  opacity: ${({ isCurrent }) => (isCurrent ? '1' : '0.5')};
  transition: opacity 0.5s ease-in-out;
  text-align: center;

  @media (max-width: 768px) {
    min-width: 100%;
    padding: 0 10px; /* Ajusta o padding para telas menores */
  }
`;

const Testimonial = styled.div`
  background-color: #1F1F1F;
  padding: 20px 50px;
  border-radius: 10px;
  margin: 10px;
  color: #E0E0E0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center; /* Alinha a imagem e o texto verticalmente */
  @media (max-width: 768px) {
    padding: 20px 15px; /* Ajusta o padding para telas menores */
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
  text-align: left;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-weight: bold;
  color: #BB86FC;
`;


const AuthorImage = styled.img`
  width: 50px; /* Ajuste conforme necessário */
  height: 50px; /* Ajuste conforme necessário */
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
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
    opacity: 0.3;
    /* display: none; */
  }
`;

const Carousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? testimonials.length - 1 : currentIndex - 1);
    resetInterval();
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
    resetInterval();
  };

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

  useEffect(() => {
    resetInterval();
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
              {testimonial.image && <AuthorImage src={testimonial.image} alt={`${testimonial.author}'s photo`} />}
              <TestimonialContent>
                {testimonial.message}
                <Author>{testimonial.author}</Author>
              </TestimonialContent>
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
