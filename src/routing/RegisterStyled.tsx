import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export const CheckIconStyledGreen = styled(CheckIcon)`
  color: green;
`;

export const ClearIconStyledRed = styled(ClearIcon)`
  color: red;
`;

export const MainRegister = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  height: 100vh;
  padding: 5rem;
  gap: 2.5rem;
  background: #483d8b;
`;

export const DivStyledFlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 0.3rem;
  padding: 3rem;
  border: 2px solid gray;
`;

export const InputStyled = styled.input``;

export const LabelStyled = styled.label`
  display: flex;
  font-size: 1.5rem;
  color: #f0f8ff;
`;

export const H1Styled = styled.h1`
  color: #f0f8ff;
`;

export const ParagraphStyled = styled.p`
  color: #f0f8ff;
`;

export const InputParagraphStyled = styled.p`
  color: #00ffff;
`;

export const ErrorParagraph = styled.p`
  color: red;
  font-size: 14px;
`;

export const ButtonStyledGray = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid blue;
  border-radius: 0.2rem;
  font-weight: 600;
`;
