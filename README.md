# Шаблон для проекта на React

![Стэк](https://raw.githubusercontent.com/christofer1501/webpack_template/1645610be57914120464572100e8d14a2ada1cdb/stack.jpg)

## Быстрый старт
#### **`npm i`**
Установка всех зависимостей из package.json

#### **`npm run start`**
Запуск проекта в отдельной вкладке браузера на localhost:9000

## Структура проекта
```
├── src/                       # Исходники
│   ├── assets/                # Подключаемые ресурсы
│   │   └── styles/            # Стили
│   │       ├── index.scss     # Файл в который импортируются все стили
│   │       └── example.scss   # Пример стилей, удалить при разработке
│   │   └── img/               # Папка изображений
│   ├── store/                 # Файлы для работы с redux
│   │   └── actions.ts         # Экшены
│   │   └── reducer.ts         # Редюсер
│   ├── App.tsx                # Код приложения
│   ├── index.html             # HTML разметка с контейнером root, в который рендерится проект
│   ├── index.tsx              # Корневой файл проекта
│   └── models.ts              # Интерфейсы
├── .babelrc                   # Конфигурация компиляции Javascript в es5
├── .eslintrc.json             # Конфигурация проверки JavaScript в ESLint
├── .gitignore                 # Список исключённых файлов из Git
├── README.md                  # Документация шаблона
├── package.json               # Список модулей и прочей информации
├── postcss.config.js          # Конфигурация компиляции стилей
├── tsconfig.json              # Конфигурация Typescript
└── webpack.conf.js            # Конфигурация Webpack.js
```
