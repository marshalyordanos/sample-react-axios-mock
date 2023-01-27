import { width } from "@mui/system";
import { Alert, Modal, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CarCard from "../components/CarCard";

const CarPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fatchdata = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96"
        );

        console.log(res.data);
        setCars(res.data.cars);
        setLoading(false);
      } catch (err) {
        setError(true);
        setIsModalOpen(true);
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
    <Container>
      {/* <Skeleton paragraph={row} /> */}
      <Header>
        <h1>Cars</h1>
      </Header>
      {loading ? (
        <Body>
          {Array(9)
            .fill(2)
            .map((_) => (
              <div style={{ width: 450, margin: 20 }}>
                <Skeleton.Input
                  style={{ height: 250, width: "100%" }}
                  active={true}
                  size={"large"}
                  block={true}
                />
                <div
                  style={{
                    // border: "1px solid",
                    width: 450,
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <Skeleton.Button
                    style={{ marginTop: 20 }}
                    className="aaaa"
                    size={"large"}
                    active={true}
                  />
                  <Skeleton.Button
                    style={{ marginTop: 20, width: 250 }}
                    className="aaaa"
                    size={"large"}
                    active={true}
                  />
                </div>
              </div>
            ))}
        </Body>
      ) : (
        <Body>
          {cars.map((car) => {
            return <CarCard key={car.id} car={car} />;
          })}
        </Body>
      )}

      <Modal
        title="Error"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Alert message="Something is wrong" type="error" />
      </Modal>
    </Container>
  );
};

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.div`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.6);
  border-bottom: 4px solid rgba(0, 0, 0, 0.4);
  padding-bottom: 10px;
`;

const Container = styled.div`
  .aaaa {
    width: 400px;
  }
`;

export default CarPage;
