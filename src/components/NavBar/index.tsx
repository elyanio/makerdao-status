/* eslint-disable no-confusing-arrow */
import React from 'react';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import { useSideBarContext } from '../../context/SidebarContext';
import Icon from '../Icon';
import { IconNames } from '../Icon/IconNames';
import { Label } from '../styledComponents';

interface Props {
  title?: string;
  iconName?: IconNames;
  action?: () => void;
}

export default function Navbar({ title, iconName, action }: Props) {
  const { expanded } = useSideBarContext();
  return (
    <Nav>
      <TitleContainer>
        <Span>
          {iconName && (
            <Icon width={35} height={35} name={iconName} fill="#748AA1" />
          )}
          <Label color="#31394D" size="24px" lineHeight="30px">
            {title}
          </Label>
        </Span>
      </TitleContainer>
      <ActionDiv expanded={expanded}>
        <Span>
          <Label size="14px" color="#748AA1" lineHeight="16px">
            Feedback
          </Label>
          <Button onClick={action}>
            <Icon width={17} height={17} name="feedBack" fill="white" />
          </Button>
        </Span>
      </ActionDiv>
    </Nav>
  );
}

const Button = styled.button`
  background: none;
  border: none;
`;

const TitleContainer = styled.div`
  height: 25px;
  ${down('xs')} {
    width: 100%;
    padding-top: 5px;
  }
`;

const Span = styled.span`
  margin-left: 50px;
  height: 25px;
  ${down('xs')} {
    margin-left: 1rem;
  }
  display: flex;
  align-items: center;
  div {
    margin-top: 5px;
    margin-right: 10px;
  }
`;
const ActionDiv = styled.div`
  ${down('xs')} {
    display: flex;
    width: 100%;
    justify-content: end;
    margin-right: 160px;
  }
  margin-right: ${({ expanded }: { expanded?: boolean }) =>
    expanded ? '260px' : '110px'};
`;

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background: rgb(219 247 243);
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
  }
  ${down('xs')} {
    flex-direction: column;
  }
`;
