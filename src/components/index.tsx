import * as React from 'react';
import {
  Form,
  ButtonToolbar,
  Button,
  ProgressBar,
} from 'react-bootstrap';
import * as INT from '../models';


interface StepperProps {
  tagline: string,
  children: Array<any>,
}

const Stepper = ({ tagline, children }: StepperProps) => {
  console.log(children);
  // текущий шаг
  const [currentStep, setStep] = React.useState(1);


  const handleNextStep = () => {
    setStep(currentStep === children.length ? 1 : currentStep + 1);
  };

  const handlePrevStep = () => {
    setStep(currentStep - 1);
  };

  // внутри ф-ии подразумевается обработка и отправка данных, пока пусто
  const handleSendForm = ():null => null;

  // const isAllValid = (data) => (
  //   // если у инпутов есть поле isVerify, то проверяем все ли инпуты правильно заполнены
  //   // иначе возвращаем true чтобы раздисэблить кнопку next
  //   data.type === C.INPUT_GROUP ? data.content.every(item => item.isVerify) : true
  // );

  const isLastStep = currentStep === children.length;

  return (
    <div className="main-wrapper">
      <h2>{ tagline }</h2>
      <div className="stepper">
        <p className="stepper__tagline">
          Шаг&nbsp;
          { currentStep }
          &nbsp;из&nbsp;
          { children.length }
        </p>
        <ProgressBar now={100 / children.length * currentStep} variant="secondary" /> 
        <hr />
        <Form>
          {
            children[currentStep - 1]
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
            // disabled={!currentMode}   || !isAllValid(children[currentStep - 1])
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
