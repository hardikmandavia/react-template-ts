import './styles.css';
import LOGO from './logo.svg';

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template - {process.env.NODE_ENV} {process.env.name}</h1>
      <img src={LOGO} alt="React Logo" width="300" height="200" />
    </>
  );
};
