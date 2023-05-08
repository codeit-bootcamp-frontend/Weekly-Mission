import styled from "styled-components";
import PropTypes from "prop-types";

const LinkButton = styled.button`
  cursor: pointer;
  text-align: center;
  border-radius: 0.8rem;
  padding: 1.6rem 0;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--white);
  background-color: var(--primary);
`;

LinkButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default LinkButton;
