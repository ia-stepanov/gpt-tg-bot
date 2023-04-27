import { Configuration, OpenAIApi } from 'openai';
import config from 'config';
import { createReadStream } from 'fs';

class OpenAI {
  roles = {
    ASSISTANT: 'assistant',
    USER: 'user',
    SYSTEM: 'sytem',
  };

  constructor(apiKey) {
    // Инициализация конфигурации OpenAI с переданным ключом
    const configuration = new Configuration({
      apiKey,
    });
    this.openai = new OpenAIApi(configuration);
  }

  // Метод для общения с моделью GPT-3.5
  async chat(messages) {
    try {
      const response = await this.openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages,
      });
      return response.data.choices[0].message;
    } catch (e) {
      console.log('Error while gpt chat', e.message);
    }
  }

  // Метод для расшифровки аудиофайла
  async transcription(filepath) {
    try {
      const response = await this.openai.createTranscription(
        createReadStream(filepath),
        'whisper-1'
      );
      return response.data.text;
    } catch (e) {
      console.log('Error while transcription', e.message);
    }
  }
}

// Создание экземпляра класса с переданным ключом и экспорт
export const openai = new OpenAI(config.get('OPENAI_KEY'));
