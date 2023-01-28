import axios from "axios";

const instanceCurrency = axios.create({
    baseURL: 'https://api.monobank.ua/bank/currency',
});

export const getCurrency = async () => {
    const {
        data
    } = await instanceCurrency.get();
    return data;
    // return fetch('https://api.monobank.ua/bank/currency').then(data => data.json())
};