// Vendors
import { NavBar, Icon } from 'antd-mobile';

// Styles
import { LeftIcon, TitleNavbar } from './style';

// Assets
import ArrowLeft from '../../../public/img/icons/arrow-left.svg';

export default () => (
  <NavBar
    mode="light"
    leftContent={[
      <LeftIcon key={0}>
        <ArrowLeft />
      </LeftIcon>,
      <TitleNavbar key={1}>Statistik Website Mini</TitleNavbar>,
    ]}
  />
);
