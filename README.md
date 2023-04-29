# GPT Telegram Bot
### ***Обучающий проект [по созданию Telegram-бота для общения с ChatGPT](https://youtu.be/-6ufFPvp6CY)***  
**Автор проекта: [Владилен Минин](https://www.youtube.com/@VladilenMinin)**

## Описание проекта
GPT Telegram Bot — это Telegram-бот, который умеет принимать голосовые и текстовые сообщения, запоминать контекст общения и генерировать ответы, используя ChatGPT. 

Проект разработан на NodeJS и включает в себя технологии, необходимые для создания ботов, работающих с искусственным интеллектом.

## Функционал:
- Принятие голосовых и текстовых сообщений;
- Перевод голосовых сообщений в текст;
- Запоминание контекста общения;
- Работа с ChatGPT API для генерации ответов.

## Стек технологий:
- JavaScript:
  - Промисы (Promise);
  - Асинхронность и оптимизация;
  - Rest API;
- NodeJS;
- Docker;
- Telegram Bot API;
- OpenAI API.

## Установка и запуск проекта:
Клонировать репозиторий:

    git clone https://github.com/ia-stepanov/gpt-tg-bot.git

Установить зависимости:

    npm install

В папке `config` создать файл с именем `production.json`. Добавить в него токены от Telegram-бота и OpenAI: 
```
{
  "TELEGRAM_TOKEN": "ВАШ_TELEGRAM_TOKEN",
  "OPENAI_KEY": "ВАШ_OPENAI_KEY",
}
```

Запустить проект:

    npm start

## Языки:
- JavaScript

## Доп. информация:
- [Как запустить ChatGPT из России в 5 шагов](https://t.me/whackdoor/2787);
- [Как получить токен от Telegram-бота](https://youtu.be/-6ufFPvp6CY?t=468);
- [Как получить токен от OpenAI](https://youtu.be/-6ufFPvp6CY?t=2744);
- [Как установить Docker на VPS/VDS с Ubuntu](https://selectel.ru/blog/what-is-docker/#vmashine).

## Скриншот:
<details><summary><b>Развернуть</b></summary>

[![gpt-tg-bot](https://user-images.githubusercontent.com/86494748/234933102-701cca66-0e99-401a-bbea-07e8d33dfbd4.jpg)](https://childhood.ia-stepanov.ru/)

</details>

## Ссылка на проект:
https://github.com/ia-stepanov/gpt-tg-bot