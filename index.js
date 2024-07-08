const TelegramBot = require('node-telegram-bot-api');
const token = '6952267098:AAF3zaBS1clL9KWKdTdHrxEetfsc4sU6Krc';
const bot = new TelegramBot(token, {polling: true});
const webAppUrl ='https://keen-gumdrop-b66a38.netlify.app/'

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (text==='/start'){
await bot.sendMessage(chatId, 'Нже появится кнопка, заполни форму ',{
    reply_markup:{
        inline_keyboard: [
            [{text:'Сделать заказ: ', web_app:{url: webAppUrl}}]
        ]
    }
});

    }

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});