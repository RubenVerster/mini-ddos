const axios = require('axios');

const websiteList = [
  'http://kremlin.ru/',
  'https://www.gosuslugi.ru/',
  'https://epp.genproc.gov.ru/',
  'http://ach.gov.ru/',
  'http://www.scrf.gov.ru',
  'https://mil.ru',
  'https://gazprom.ru',
  'https://lukoil.ru',
  'https://magnit.ru',
  'https://www.nornickel.com',
  'https://www.surgutneftegas.ru',
  'https://www.tatneft.ru',
  'https://www.evraz.com/ru',
  'https://nlmk.com',
  'https://sibur.ru',
  'https://serverstal.com',
  'https://www.metalloinvest.com',
  'https://nangs.org',
  'https://rmk-group.ru/ru',
  'https://ya.ru',
  'https://www.polymetalinternational.com/ru/',
  'https://www.uralkali.com/ru/',
  'https://www.eurosib.ru/',
  'https://omk.ru',
  'https://www.sberbank.ru',
  'https://www.vtb.ru',
  'https://www.gazprombank.ru',
  'https://mos.ru/uslugi/',
  'https://goverment.ru',
  'https://nalog.gov.ru',
  'https://customs.gov.ru',
  'https://prof.gov.ru',
  'https://rkn.gov.ru',
];

const PING_ATTEMPTS = 777;

const pingSites = async () => {
  websiteList.forEach(async (website) => {
    try {
      const res = await axios.get(website);
      console.log(`${website} pinged successfully!`);
    } catch (error) {
      console.log(`Couldn't ping ${website}`);
      console.log(`Might be because it's down! Well done :)`);
      console.log(`Trying next website`);
    }
  });
};

for (let i = 0; i < PING_ATTEMPTS; i++) {
  pingSites();
}
