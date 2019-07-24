import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import * as ACT from '../store/actions';
import * as INT from '../models';


interface RadioGroupProps {
  handleSetMode: Function,
  elems: INT.Step,
  legend: string,
}

const RadioGroup = ({ handleSetMode, elems, legend }: RadioGroupProps) => {
  const dispatch = useDispatch();
  const { content: radios } = elems;

  const onCheckRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    elems.choosen = target.getAttribute('value');

    dispatch({
      type: ACT.REFRESH_STEPPER,
      ...elems,
    });
  };

  const renderRadios = (arr: INT.RadioItem[]) => arr.map((item, index) => (
    <Form.Check
      key={item.alias}
      type="radio"
      label={item.label}
      id={item.alias}
      value={item.alias}
      name={item.name}
      checked={elems.choosen === item.alias}
      onChange={onCheckRadio}
      data-id={index}
    />
  ));

  const items = renderRadios(radios);

  return (
    <fieldset>
      <Form.Group onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSetMode(e.target.value)}>
        <Form.Label as="legend">
          {
            legend
          }
        </Form.Label>
        <div>
          {
            items
          }
        </div>
      </Form.Group>
      <hr />
    </fieldset>
  );
};

export default RadioGroup;
