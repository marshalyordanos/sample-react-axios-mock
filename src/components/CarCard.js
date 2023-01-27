import { Carousel, Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CarCard = ({ car, activeHandlerm, inactiveHandler }) => {
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
  const navigate = useNavigate();

  return (
    <Contaner>
      <CarouselWrapper afterChange={onChange}>
        {car?.images.length !== 0 &&
          car.images.map((img, i) => {
            return (
              <div key={i} id="main_img">
                <ImageCon src={img} alt="no image" />
                <div className="price" style={{ padding: 10 }}>
                  <h1 style={{ fontSize: 24, color: "gray" }}>
                    $ {car?.carPrice}
                  </h1>
                  <ButtonStyle>
                    <button
                      onClick={() => {
                        navigate("/" + car.id);
                      }}
                      className={"green"}
                      id="small">
                      Detail
                    </button>
                  </ButtonStyle>
                </div>
              </div>
            );
          })}

        {/* {car?.video.length !== 0 && (
          <div>
            <Imaga src="https://i.redd.it/uvpt730qle951.jpg" />
          </div>
        )} */}
      </CarouselWrapper>

      <div className="btn">
        <h1 style={{ fontSize: 20 }}>{car?.carName}</h1>
        <ButtonStyle>
          <button onClick={() => {}} className={"green"} id="small">
            Booking
          </button>
        </ButtonStyle>
      </div>
    </Contaner>
  );
};

const ImageCon = styled(Image)`
  width: 350px;
  height: 400px;
  object-fit: cover;
`;
const CarouselWrapper = styled(Carousel)`
  width: 400px;
  height: 350px;
  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #main_img {
    img {
      height: 250px;
      width: 400px;
      object-fit: cover;
    }
  }
  > .slick-dots li button {
    border-radius: 10%;
    height: 5px;
    background-color: gray;
  }
  > .slick-dots li.slick-active button {
    border-radius: 10%;
    height: 5px;
    background: black;
  }
  @media screen and (max-width: 600px) {
    width: 200px;
  }
`;
const Contaner = styled.div`
  width: 401px;
  position: relative;
  border: 1px solid lightgray;
  margin: 25px;

  .btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* border-radius: 6px 0 0 6px; */
    width: 320px;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0px;
    right: -1px;
    padding: 5px 10px;
    h1 {
      margin-right: 20px;
      color: white;
    }
  }
  @media screen and (max-width: 600px) {
    width: 200px;
    margin: 8px 5px;
    img {
      width: 200px;
    }
    .btn {
      flex-direction: column;
      width: 190px;
      #small,
      #small2 {
        width: 60px;
        font-size: 12px;
        padding: 0;
      }
      h1 {
        font-size: 11px;
      }
    }
  }
`;

export const ButtonStyle = styled.div`
  .green {
    padding: 6px 35px;
    background-color: #10b981;
    border: 1px solid #10b981;
    border-radius: 6px;
    color: white;
  }
  .red {
    padding: 6px 35px;
    background-color: #f9504e;
    border: 1px solid #f9504e;
    border-radius: 6px;
    color: white;
  }
  .green:hover {
    border: 1px solid #10b981;
    background-color: white;
    color: #10b981;
  }
  .red:hover {
    border: 1px solid #f9504e;
    background-color: white;
    color: #f9504e;
  }
  .disabled {
    border-radius: 6px;
    background-color: #dddddd;
    /* background-color: rgba(0, 0, 0, 0.4); */

    border: 1px solid gray;
    color: black;
    padding: 6px 35px;
  }
  .disabled:hover {
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid gray;
    color: white;
    padding: 6px 35px;
  }
`;

export default CarCard;
