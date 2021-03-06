import styled from 'styled-components';

const AdminStyled = styled.section`
  font-family: var(--font-alpha);
  color: var(--cl-grey-80);
  font-size: 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
`;

const Nav = styled.nav`
  width: 15vw;
  min-width: 325px;
  max-width: 500px;
  height: 100%;
  padding: 1rem;
  color: var(--cl-grey-10);
  position: relative;

  &::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../../common/assets/img/nav-bg.jpg');
    background-size: cover;
    pointer-events: none;
    position: absolute;
    z-index: -1;
  }

  &::after {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    pointer-events: none;
    position: absolute;
    background: black;
    z-index: -1;
  }
`;

const Main = styled.main`
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  padding: 30px;
`;

export { AdminStyled, Nav, Main };
