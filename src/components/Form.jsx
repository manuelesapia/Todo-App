import React, { useState } from "react";
import styled from "styled-components";

function Form({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    setTaskName(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName("");
    } else {
      setError("Please enter a task.");
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <LabelWrapper>
        <label htmlFor="new-todo-input">What needs to be done?</label>
      </LabelWrapper>
      <Input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={taskName}
        onChange={handleChange}
      />
      <Button type="submit">Add</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  background: #f9f9f9;
  padding: 4rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
`;

const LabelWrapper = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 1rem;
  font-size: 1rem;
`;

export default Form;
