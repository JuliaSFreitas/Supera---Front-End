import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

import './index.css'

export function SliderTable(){
    let Sdata = [
        {
            dados: '14/02/2019',
            valencia: 'R$ 30895,46',
            tipo: 'depósito',
            nome: '--------'
        },
        {
            dados: '14/04/2019',
            valencia: 'R$ 12,24',
            tipo: 'Transferência Entrada',
            nome: 'Fulano'
        },
        {
            dados: '11/06/2020',
            valencia: 'R$ -500,50',
            tipo: 'Transferência Saída', 
            nome: 'Sicrano'
        },
        {
            dados: '11/06/2020',
            valencia: 'R$ -1234,00',
            tipo: 'Saque', 
            nome: '--------'
        },
    ]

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
    return (
        <>
          <Slider {...settings}>
            {
              Sdata.map((value, index) => {
                return(
                    <ul className="" key={index}>
                        <li className="d">{value.dados}</li>
                        <li className="v">{value.valencia}</li>
                        <li className="t">{value.tipo}</li>
                        <li>{value.nome}</li>
                    </ul>
                )
              })
            }
          </Slider>
        </>
    )
}