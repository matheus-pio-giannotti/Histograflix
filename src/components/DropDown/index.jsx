import React from "react";
import styled from "styled-components";

// Contêiner para organizar o rótulo (label) e o campo de seleção (select)
const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// Estilo para o rótulo (label) do campo de seleção
const Label = styled.label`
  font-size: 18px;
  color: #fff;
`;

// Estilo para o campo de seleção (select)
const Select = styled.select`
  padding: 14px;
  font-size: 14px;
  border: 2px solid #fff;
  border-radius: 5px;
  width: 100%;
  background-color: #111;
  color: #fff;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.8);
  }
`;

// Componente lista suspensa
const DropDown = ({ label, name, value, onChange, options }) => (
  <SelectWrapper>
    <Label htmlFor={name}>{label}</Label>
    <Select id={name} name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  </SelectWrapper>
);

export default DropDown;
