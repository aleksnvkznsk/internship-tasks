# Задание 1

Необходимо реализовать верстку двух блоков используя правила `display: flex` и `display: grid`

[Ссылка на макет](https://www.figma.com/file/wIih8te6eJFzPHdT4gQGcY/%D0%A1%D1%82%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0---%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-1?type=design&node-id=0%3A1&mode=design&t=qvLoXgcG4Es1pYGj-1)   
**Срок выполнения: 1 неделя**

Для выполнения задания потребуется изучить основы препроцессоров [Pug](https://pugjs.org/language/tags.html) и [Sass](https://sass-lang.com/)
- [Туториал по HTML препроцессору Pug](https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228)
- [Основы Sass](https://sass-scss.ru/guide/)

Всю разметку и стили необходимо записать в соответствующие pug, scss файлы в заранее подготовленных компонентах `flex-container` и `grid-container`

> Дополнительно:
> 
> Выполнить верстку по методологии [БЭМ](https://ru.bem.info/methodology/quick-start/)

## Работа с проектом

### Требования к системе
- Node.js (v.16+)
- npm (v.7+)

### Запуск проекта
1) Установить зависимости
    ```shell
    npm i
    ```
2) Запустить локальную dev-сборку
    ```shell
    npm run dev
    ```
    Запущенный локальный сервер будет доступен в браузере по адресу [localhost:3000](http://localhost:3000/)

### Краткое описание файловой структуры
```
/
├── build_modules
└── src
    ├── assets
    │   ├── fonts
    │   ├── icons
    │   ├── images
    │   └── videos
    ├── components
    └── pages
```
- `build_modules` - служебная директория, необходимая для сборки и запуска проекта. **В рамках задания изменять содержимое папки нельзя**
- `src` - основная рабочая директория, содержащая исходный код проекта
- `src/assets` - необязательная директория для хранения статичных ресурсов (шрифты, изображения, видео, иконки)
- `src/components` - директория для хранения исходного кода компонентов. Каждый компонент располагается в отдельной папке и может состоять из pug, scss и ts файлов
- `src/pages` - директория для хранения статичных страниц
