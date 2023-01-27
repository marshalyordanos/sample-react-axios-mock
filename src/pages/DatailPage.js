import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Alert, Carousel, Image, Modal, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ButtonStyle } from "../components/CarCard";

const DatailPage = () => {
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fatchdata = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96"
        );

        const car = res.data.cars.find((car) => car.id == params.id);
        console.log("=================", car);
        setCar(car);
        setLoading(false);
      } catch (err) {
        setError(true);
        isModalOpen(true);
        setLoading(false);
      }
    };
    fatchdata();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {loading ? (
        <SkeletonCon>
          <div className="pp">
            <Skeleton.Input
              style={{ height: 40, width: 600 }}
              active={true}
              size={"large"}
              block={true}
            />
            <Skeleton.Input
              style={{ height: 400, width: 600 }}
              active={true}
              size={"large"}
              block={true}
            />
          </div>
          <div className="pp">
            <Skeleton style={{ width: 600 }} active={true} block={true} />
            <Skeleton style={{ width: 600 }} active={true} block={true} />
            <Skeleton style={{ width: 600 }} active={true} block={true} />
          </div>
        </SkeletonCon>
      ) : (
        <Container>
          <div>
            <div>
              <IconButton
                onClick={() => {
                  navigate("/");
                }}>
                <ArrowBack />
              </IconButton>
            </div>
            <div className="price" style={{ padding: 10 }}>
              <h1 style={{ fontSize: 28 }}>{car?.carName}</h1>
              <h2 style={{ fontSize: 28 }}>${car?.carPrice}</h2>
            </div>
            <CarouselWrapper afterChange={onChange}>
              {car?.images &&
                car.images.map((img, i) => {
                  return (
                    <div key={i} id="main_img">
                      <ImageCon src={img} />
                    </div>
                  );
                })}
            </CarouselWrapper>
          </div>
          <div className="left">
            <div className="detail">
              <h1>Detail</h1>
              <p>{car?.detail}</p>
            </div>
            {car?.features && (
              <div className="features">
                <h1>features</h1>
                {car?.features.map((data1) => (
                  <p>{data1}</p>
                ))}
              </div>
            )}
            {car?.includedInThePrice && (
              <div className="features">
                <h1>IncludedInThePrice</h1>
                {car?.includedInThePrice.map((data1) => (
                  <p>{data1}</p>
                ))}
              </div>
            )}
          </div>
          <Modal
            title="Error"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}>
            <Alert message="Something is wrong" type="error" />
          </Modal>
        </Container>
      )}
    </>
  );
};

const SkeletonCon = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .pp {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
const ImageCon = styled(Image)`
  width: 350px;
  height: 500px;
  object-fit: cover;
`;
const CarouselWrapper = styled(Carousel)`
  width: 600px;
  height: 500px;

  #main_img {
    img {
      height: 450px;
      width: 600px;
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
const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .features {
    p {
      padding: 12px 10px;
      border-radius: 8px;
      font-size: 18px;
      border: 1px solid #10b981;
      margin: 10px 0;
      margin-top: 20px;
    }
    p:hover {
      background-color: whitesmoke;
    }
    h1 {
      font-size: 25px;
      color: #3a3a3a;
      font-weight: normal;
      margin: 15px 0;
      color: #10b981;
    }
  }
  .detail {
    p {
      font-size: 18px;
      max-width: 600px;
      text-align: justify;
      color: #3a3a3a;
      font-family: Arial, Helvetica, sans-serif;
    }
    h1 {
      font-size: 25px;
      color: #3a3a3a;
      font-weight: normal;
      color: #10b981;
    }
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: #10b981;
    }
  }
`;

export default DatailPage;
