import axios from "axios";

const instanceCurrency = axios.create({
    baseURL: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
});

export const getCurrency = async () => {
    // const {
    //     data
    // } = await instanceCurrency.get();
    // return data;
    return fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(data => data.json())
};