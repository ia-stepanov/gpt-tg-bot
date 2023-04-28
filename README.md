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
<details><summary><b>Как запустить ChatGPT из России;</b></summary>

**Шаг 1. Установка VPN**  
Выберите и установите VPN-сервис. Например **[ExpressVPN](https://www.expressvpn.com/ru)**. Он поддерживает оплату через Qiwi.

**Шаг 2. Регистрация на ChatGPT**  
Запустите VPN и подключитесь к серверу в США. Зайдите на сайт **[ChatGPT](https://chat.openai.com/chat)** и зарегистрируйтесь, используя свой Google аккаунт.

**Шаг 3. Покупка телефонного номера**  
Далее понадобится телефонный номер. Зайдите в **[OnlineSIM](https://onlinesim.io/v2/numbers)** и закажите, например, латвийский номер для OpenAI. Сервис поддерживает российские карты.

**Шаг 4. Ввод номера на ChatGPT**  
Вернитесь на сайт ChatGPT и введите арендованный номер в соответствующее поле.

**Шаг 5. Подтверждение номера телефона**  
Перейдите обратно на сайт OnlineSIM, скопируйте SMS-сообщение с кодом подтверждения. Вставьте код в поле на сайте ChatGPT, чтобы завершить процесс подтверждения.

**Источник**: [Бэкдор, Как запустить ChatGPT из России в 5 шагов](https://t.me/whackdoor/2787)
</details>

- **[Как получить токен от Telegram-бота](https://youtu.be/-6ufFPvp6CY?t=468)**;
- **[Как получить токен от OpenAI](https://youtu.be/-6ufFPvp6CY?t=2744)**;

<details><summary><b>Как установить Docker на VPS/VDS с Ubuntu.</b></summary>

Синхронизировать пакетную базу apt и установить зависимости:
```
sudo apt-get update
```
```
sudo apt-get install \
apt-transport-https \
ca-certificates \
curl \
gnupg \
lsb-release
```

Импортировать GPG-ключ для репозитория docker:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

Добавить новый репозиторий в список apt: 
```
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Установить докер:
```
sudo apt-get update
```
```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

**Источник**: [Selectel, Установка Docker](https://selectel.ru/blog/what-is-docker/#vmashine)
</details>

## Скриншот:
<details><summary><b>Развернуть</b></summary>

[![gpt-tg-bot](https://user-images.githubusercontent.com/86494748/234933102-701cca66-0e99-401a-bbea-07e8d33dfbd4.jpg)](https://childhood.ia-stepanov.ru/)

</details>

## Ссылка на проект:
https://github.com/ia-stepanov/gpt-tg-bot