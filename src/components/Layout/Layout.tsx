import { Container } from './Layout.styled';

interface Props {
  children?: React.ReactElement;
}

const Layout = ({ children }: Props) => <Container>{children}</Container>;

export default Layout;
