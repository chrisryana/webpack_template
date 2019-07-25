import * as React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as ACT from '../store/actions';
import * as INT from '../models';


interface InputGroupProps {
  elems: INT.Step,
}

const InputsList = ({ elems }: InputGroupProps) => {
  const dispatch = useDispatch();

  const handleChangeValue = (e: React.FormEvent & React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = e;
    const inpIndex = target.getAttribute('data-id');
    content[inpIndex].value = target.value;

    dispatch({
      type: ACT.REFRESH_STEPPER,
      ...elems,
    });
  };

  const handleVerificationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const inpIndex = target.getAttribute('data-id');
    const currentInp = content[inpIndex];
    if (!target.value) {
      currentInp.isVerify = null;
    } else {
      currentInp.isVerify = !currentInp.regular.exec(currentInp.value);
    }
    dispatch({
      type: ACT.REFRESH_STEPPER,
      ...elems,
    });
  };

  const getClassName = (index: number) => {
    let currentClass;
    if (content[index].isVerify === null) {
      currentClass = null;
    } else if (content[index].isVerify) {
      currentClass = 'is-valid';
    } else {
      currentClass = 'is-invalid';
    }
    return currentClass;
  };

  const handleStopEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\.|-/, '');
  };

  const renderInputs = (inputs: INT.InputItem[]) => inputs.map((item, index) => (
    <React.Fragment key={item.alias}>
      <Form.Group as={Row}>
        <Form.Label column md="3">
          {item.label}
          {item.required ? <span className="input__required">*</span> : null}
        </Form.Label>
        <Col md="9">
          <Form.Control
            type={item.type}
            onBlur={handleVerificationInput}
            onChange={handleChangeValue}
            onInput={handleStopEntry}
            value={item.value}
            data-id={index}
            className={getClassName(index)}
          />
        </Col>
      </Form.Group>
      <hr />
    </React.Fragment>
  ));

  const items = renderInputs(elems);

  return (
    <React.Fragment>
      {
        items
      }
    </React.Fragment>
  );
};

export default InputsList;
