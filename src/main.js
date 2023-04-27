// Импортирование необходимых модулей и файлов
import { Telegraf, session } from 'telegraf';
import { message } from 'telegraf/filters';
import { code } from 'telegraf/format';
import config from 'config';
import { ogg } from './ogg.js';
import { openai } from './openai.js';

// Вывод переменной среды TEST_ENV
console.log(config.get('TEST_ENV'));

// Создание начальной сессии
const INITIAL_SESSION = {
  messages: [],
};

// Создание экземпляра бота Telegraf с полученным токеном
const bot = new Telegraf(config.get('TELEGRAM_TOKEN'));

// Использование сессии для бота
bot.use(session());

// Обработка команды /new, создание новой сессии
bot.command('new', async (ctx) => {
  ctx.session = INITIAL_SESSION;
  await ctx.reply('Жду вашего голосового или текстового сообщения');
});

// Обработка команды /start, создание новой сессии
bot.command('start', async (ctx) => {
  ctx.session = INITIAL_SESSION;
  await ctx.reply('Жду вашего голосового или текстового сообщения');
});

// Обработка голосовых сообщений
bot.on(message('voice'), async (ctx) => {
  ctx.session ??= INITIAL_SESSION;
  try {
    await ctx.reply(code('Сообщение принял. Жду ответ от сервера...'));
    const link = await ctx.telegram.getFileLink(ctx.message.voice.file_id);
    const userId = String(ctx.message.from.id);
    const oggPath = await ogg.create(link.href, userId);
    const mp3Path = await ogg.toMp3(oggPath, userId);

    const text = await openai.transcription(mp3Path);
    await ctx.reply(code(`Ваш запрос: ${text}`));

    ctx.session.messages.push({
      role: openai.roles.USER,
      content: text,
    });

    const response = await openai.chat(ctx.session.messages);

    ctx.session.messages.push({
      role: openai.roles.ASSISTANT,
      content: response.content,
    });

    await ctx.reply(response.content);
  } catch (e) {
    console.log(`Error while voice message`, e.message);
  }
});

// Обработка текстовых сообщений
bot.on(message('text'), async (ctx) => {
  ctx.session ??= INITIAL_SESSION;
  try {
    await ctx.reply(code('Сообщение принял. Жду ответ от сервера...'));

    ctx.session.messages.push({ role: openai.roles.USER, content: ctx.message.text });

    const response = await openai.chat(ctx.session.messages);

    ctx.session.messages.push({
      role: openai.roles.ASSISTANT,
      content: response.content,
    });

    await ctx.reply(response.content);
  } catch (e) {
    console.log(`Error while voice message`, e.message);
  }
});

// Запуск бота
bot.launch();

// Обработка сигналов завершения работы
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGERM', () => bot.stop('SIGERM'));
