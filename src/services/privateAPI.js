import axios from "axios";

const instanceCurrency = axios.create({
    baseURL: 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5',
});

export const getCurrency = async () => {
    const {
        data
    } = await instanceCurrency.get();

    return data;
};