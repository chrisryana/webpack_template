import * as React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Stepper from './components';
import RadioGroup from './components/radio_group';
import InputsList from './components/inputs_list';
import * as INT from './models';
import * as C from './lib/const';

const fields = require('./lib/fields.json');

const radios = {
  legend: 'Выберите нужную форму регистрации:',
  choosen: '',
  content: [
    {
      name: 'type-of-form',
      alias: C.TYPE_ENTITY,
      label: 'Юр. лицо',
    },
    {
      name: 'type-of-form',
      alias: C.TYPE_INDENT,
      label: 'ИП',
    },
  ]
}

// TODO: UseEffect for fetch json
const App = () => {
  // режим заявки для юр лица (entity) или ИП (indent)
  const [currentMode, setMode] = React.useState(radios.choosen);
  const getSteps = () => ([
    {
      type: C.RADIO_GROUP,
      legend: 'Выберите нужную форму регистрации:',
      choosen: '',
      content: [
        {
          name: 'type-of-form',
          alias: C.TYPE_ENTITY,
          label: 'Юр. лицо',
        },
        {
          name: 'type-of-form',
          alias: C.TYPE_INDENT,
          label: 'ИП',
        },
      ],
    },
    {
      type: C.INPUT_GROUP,
      content: [
        {
          alias: 'surname',
          label: 'Фамилия',
          regular: /[^А-яЁё]/,
          required: true,
          type: 'text',
          value: '',
          isVerify: null,
        },
        {
          alias: 'name',
          label: 'Имя и отчество',
          regular: /[^А-яЁё ]/,
          required: true,
          type: 'text',
          value: '',
          isVerify: null,
        },
        {
          alias: 'country',
          label: 'Страна/регион',
          regular: /[^А-яЁё]/,
          required: true,
          type: 'text',
          value: '',
          isVerify: null,
        },
        {
          alias: 'region',
          label: 'Область',
          regular: /[^А-яЁё]/,
          required: true,
          type: 'text',
          value: '',
          isVerify: null,
        },
        {
          alias: 'town',
          label: 'Город',
          regular: /[^А-яЁё]/,
          required: true,
          type: 'text',
          value: '',
          isVerify: null,
        },
        {
          alias: 'adress',
          label: 'Адрес',
          regular: /[^А-яЁё]/,
          required: true,
          type: 'text',
          value: '',
          isVerify: null,
        },
      ],
    },
    {
      type: C.INPUT_GROUP,
      [C.TYPE_INDENT]: [
        {
          alias: 'ogrnip',
          label: 'ОГРНИП',
          regular: /\d{13}\b/,
          required: true,
          type: 'number',
          isVerify: null,
        },
        {
          alias: 'snils',
          label: 'СНИЛС',
          regular: /\d{11}\b/,
          required: true,
          type: 'number',
          isVerify: null,
        },
        {
          alias: 'inn',
          label: 'ИНН',
          regular: /\d{12}\b/,
          required: true,
          type: 'number',
          isVerify: null,
        },
        {
          alias: 'email',
          label: 'Адрес E-mail',
          regular: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
          required: true,
          type: 'email',
          isVerify: null,
        },
      ],
      [C.TYPE_ENTITY]: [
        {
          alias: 'organization',
          label: 'Организация',
          regular: /^[A-zА-яЁё"]/,
          required: true,
          type: 'text',
          isVerify: null,
        },
        {
          alias: 'position',
          label: 'Должность',
          regular: /^[А-яЁё]/,
          required: true,
          type: 'text',
          isVerify: null,
        },
        {
          alias: 'ogrn',
          label: 'ОГРН',
          regular: /\d{13}\b/,
          required: true,
          type: 'number',
          isVerify: null,
        },
        {
          alias: 'snils',
          label: 'СНИЛС',
          regular: /\d{11}\b/,
          required: true,
          type: 'number',
          isVerify: null,
        },
        {
          alias: 'inn',
          label: 'ИНН',
          regular: /\d{12}\b/,
          required: true,
          type: 'number',
          isVerify: null,
        },
        {
          alias: 'email',
          label: 'Адрес E-mail',
          regular: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g,
          required: true,
          type: 'email',
          isVerify: null,
        },
      ],
    },
  ]);


  const handleSetMode = (modeName: string) => {
    setMode(modeName);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          <Stepper tagline="Заявление на регистрацию" >
            <RadioGroup handleSetMode={handleSetMode} elems={radios} legend={radios.legend} />
            <InputsList elems={fields.personal} />
            <InputsList elems={currentMode === C.TYPE_INDENT ? fields.organization : fields.individual_organization} />
          </Stepper>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
