import fetchAPI from '../services/currencyAPI';

export const LOGIN = 'LOGIN';
export const CURRENCY = 'CURRENCY';

export const actionLogin = (email) => ({
  type: LOGIN,
  email,
});

export const actionCurrency = (currencies) => ({
  type: CURRENCY,
  currencies,
});

export const fetchAPIThunk = () => async (dispatch) => {
  const data = await fetchAPI();
  const filterData = Object.keys(data).filter((item) => item !== 'USDT');
  console.log(filterData);
  dispatch(actionCurrency(filterData));
};
