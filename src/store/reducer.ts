import * as C from '../lib/const';
import * as ACT from './actions';
import * as INT from '../models';


const InitialState: INT.State = {
  stepper: [
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
  ],
};

interface Action {
  type: string
  payload?: any,
}

function reducer(state = InitialState, action: Action) {
  switch (action.type) {
    case ACT.REFRESH_STEPPER:
      return {
        ...state,
        stepper: [...state.stepper, ...action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
