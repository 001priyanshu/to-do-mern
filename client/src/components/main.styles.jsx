import styled from "styled-components";

import doctor from "../assets/doctor.jpg";
import college from "../assets/college.jpg";
import gym from "../assets/gym.jpg";
import home from "../assets/home.jpg";
import movie from "../assets/movie.jpg";
import office from "../assets/office.jpg";
import school from "../assets/school.jpg";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  background-image: url('../assets/doctor.jpg');
`;

export const App = styled.div`
  border: 2px solid white;
  box-shadow: 0 0 7px 5px gray;
  width: 40%;
  height: 90%;
  margin: 0 auto;
  background-color: white;
  position: absolute;
  top: 7%;
  left: 30%;
  overflow: auto;

  @media (min-width: 400px) and (max-width: 800px) {
    height: 90%;
    width: 90%;
    top: 5%;
    left: 5%;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid gray;
  span {
    display: inline-block;
    margin: 5px 10px;
    h1 {
      color: black;
    }
  }
`;

export const Fields = styled.div`
  margin-top: 2%;
  padding-left: 1%;
  height: 20%;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding-bottom: 1%;
  border-bottom: 2px solid gray;
`;

export const Inputs = styled.div`
  border: 2px solid grey;
  width: 98%;
  height: 90%;
  border-radius: 5%;
  label {
    font-weight: 700;
    margin-left: 2%;
  }

  input {
    border: none;
    margin-left: 5px;
    padding: 3px 2px 2px 0px;
    padding-left: 1px;
  }

  select {
    border: transparent;
    margin-left: 4px;
    margin-top: 5%;
  }
`;

export const ButtonsDiv = styled.div`
  height: 20%;
  display: flex;
  min-width: 50%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid gray;
`;

export const Button = styled.div`
  width: 40%;
  height: 55%;
  transition: all 0.3s;
  border: none;
  cursor: default;
  button {
    width: 90%;
    height: 75%;
    background-color: white;
    border-radius: 7%;
    span {
      margin-right: 4%;
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const UpdateDiv = styled.div`
  display: ${({ update }) => (update ? "visible" : "none")};
  width: 40%;
  height: 55%;
  transition: all 0.3s;
  border: none;
  cursor: default;
  button {
    width: 90%;
    height: 75%;
    background-color: white;
    border-radius: 7%;
    span {
      margin-right: 4%;
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const Display = styled.div`
  padding-top: 2%;
  display: flex;
  justify-content: space-evenly;
`;

export const ScheduleDiv = styled.div`
  width: 30%;
  padding: 0 3px;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const CategoryButton = styled.button`
  border: none;
  border-bottom: 1px solid gray;
  padding-left: 4px;
  padding-bottom: 3px;
  font-weight: 500;
  margin-top: 2px;
  text-align: center;
  background-color: white;
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.93);
  }
`;

export const TasksDiv = styled.div`
  width: 60%;
  border-left: 1px solid grey;
  padding-left: 2%;
  overflow: auto;
`;

export const TaskDiv = styled.div`
  height: 20%;
  margin: 0;
  margin-top: 2%;
  display: flex;
`;

export const Field = styled.div`
  width: 90%;
  > span {
    display: block;
    margin-left: 2%;
    span {
      margin-right: 2%;
    }
  }
`;

export const CategoriesDiv = styled.div`
  margin-top: 4%;
  margin-right: 4%;
  span {
    padding: 3px 4px;
    background-color: rgb(38, 218, 38);
    color: white;
    border: 1px solid black;
    letter-spacing: 0.5px;
    font-weight: 500;
  }
`;

export const UpdateIconDiv = styled.div`
  margin-top: 3%;
  span {
    font-size: 1.2rem;
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
    }
    &:active {
      color: red;
    }
  }
`;
