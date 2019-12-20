const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather

const submitForm = async (request, response) => {
    const token = '868582102:AAFcgs6MOMZu2BSPDY8Czjrp5eh8H8JsAy0';
    const bot = new TelegramBot(token, {polling: true});
    const { 
        name = 'default name',
        mail = 'default descr',
        feedback = '',
        country = '',
    } = request.body;
    // Create a bot that uses 'polling' to fetch new updates
    const dataChat = await bot.getChat('@chat_name');
    const id = dataChat.id + '';
    
    console.log("id:", id.replace('-', ''));
    console.log('my channel id:', dataChat);

    bot.sendMessage(id,
        `
        name: ${name}
        mail: ${mail}
        feedback: ${feedback}
        country: ${country}
        `
    );


}

module.exports = submitForm;