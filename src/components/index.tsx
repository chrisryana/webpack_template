import * as React from 'react';
import {
  Form,
  ButtonToolbar,
  Button,
  ProgressBar,
} from 'react-bootstrap';
import RadioGroup from './radio_group';
import InputsList from './inputs_list';
import * as C from '../lib/const';
import * as INT from '../models';


interface StepperProps {
  tagline: string,
  steps: INT.Step[],
}

const Stepper = ({ tagline, steps }: StepperProps) => {
  // текущий шаг
  const [currentStep, setStep] = React.useState<number>(1);
  // режим заявки для юр лица (entity) или ИП (indent)
  const [currentMode, setMode] = React.useState<string>(steps[0].choosen);


  const handleNextStep = () => {
    setStep(currentStep === steps.length ? 1 : currentStep + 1);
  };

  const handlePrevStep = () => {
    setStep(currentStep - 1);
  };

  const handleSetMode = (modeName: string) => {
    setMode(modeName);
  };

  // внутри ф-ии подразумевается обработка и отправка данных, пока пусто
  const handleSendForm = ():null => null;

  // const isAllValid = (data) => (
  //   // если у инпутов есть поле isVerify, то проверяем все ли инпуты правильно заполнены
  //   // иначе возвращаем true чтобы раздисэблить кнопку next
  //   data.type === C.INPUT_GROUP ? data.content.every(item => item.isVerify) : true
  // );


  const renderSteps = (arr: INT.Step[]) => arr.map(item => (
    item.type === C.RADIO_GROUP
      ? <RadioGroup handleSetMode={handleSetMode} elems={item} legend={item.legend} />
      : <InputsList elems={item} mode={item.content ? null : currentMode} />
  ));

  const items = renderSteps(steps);
  const isLastStep = currentStep === steps.length;
  // TODO: secondary btn
  return (
    <div className="main-wrapper">
      <h2>{ tagline }</h2>
      <div className="stepper">
        <p className="stepper__tagline">
          Шаг&nbsp;
          { currentStep }
          &nbsp;из&nbsp;
          { steps.length }
        </p>
        <ProgressBar now={100 / steps.length * currentStep} variant="info" /> 
        <hr />
        <Form>
          {
            items[currentStep - 1]
          }
        </Form>
        <ButtonToolbar className="justify-content-between">
          <Button
            variant="outline-secondary"
            onClick={handlePrevStep}
            disabled={currentStep === 1}
          >
            Назад
          </Button>
          <Button
            variant="outline-secondary"
            disabled={!currentMode} //  || !isAllValid(steps[currentStep - 1])
            onClick={isLastStep ? handleSendForm : handleNextStep}
          >
            {isLastStep ? 'Отправить' : 'Продолжить'}
          </Button>
        </ButtonToolbar>
      </div>
    </div>
  );
};

export default Stepper;
