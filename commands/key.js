const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const colors = require('colors');
const { isRequired } = require('../utils/validation');

const key = {
    async functionset() {
        // console.log('Hello from set');
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([{
            type: 'input',
            name: 'key',
            message: 'Enter API Key'.green + 'https://nomics.com',
            validate: isRequired
        }]);

        const key = keyManager.setKey(input.key);
        if (key) {
            console.log('API Key Set'.blue);
        }
    },
    show() {
        // console.log('Hello from show');
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log('Current API Key: ', key.yellow);

        } catch (err) {
            console.log(err.message.red);
        }

    },
    remove() {
        // console.log('Hello from remove');
        try {
            const keyManager = new KeyManager();
            const key = keyManager.deleteKey();
            console.log('Key removed'.blue);
            return;

        } catch (err) {
            console.log(err.message.red);
        }
    }
};

module.exports = key;