import axios from "axios";

const instanceCurrency = axios.create({
    baseURL: 'https://api.privatbank.ua/p24api/',
});

export const getCurrency = async () => {
    const {
        data
    } = await instanceCurrency.get('pubinfo?exchange&coursid=11');
    return data;
};