import { FC, Fragment } from 'react';
import StyledMain from './Main.styled';
import StyledReset from './Reset.styled';

const StyledApp: FC = (props) => {
  return (
    <Fragment>
      <StyledReset />
      <StyledMain />
      {props.children}
    </Fragment>
  );
};

export default StyledApp;
