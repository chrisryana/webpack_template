import * as React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Stepper from './components';

const App = () => {
  const steps = useSelector(state => state.stepper, shallowEqual); // замена mapstatetoprops

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          <Stepper tagline="Заявление на регистрацию" steps={steps} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
