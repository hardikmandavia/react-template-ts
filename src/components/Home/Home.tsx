import LOGO from '../../assets/logo.svg';

interface Props {
  message: string;
}

const Home = ({}: Props) => {
  return (
    <>
      <img src={LOGO} alt="React Logo" width="300" height="200" />
      <h1>My React App with TypeScript and Webpack 5</h1>
    </>
  );
};

export default Home;
