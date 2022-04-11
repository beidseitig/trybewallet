import fetchAPI from '../helpers/currencyAPI';

export const LOGIN = 'LOGIN';
export const CURRENCY = 'CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const actionLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const actionCurrency = (payload) => ({
  type: CURRENCY,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const fetchAPIThunkFiltered = () => async (dispatch) => {
  const data = await fetchAPI();
  const filterData = Object.keys(data).filter((item) => item !== 'USDT');
  console.log(filterData);
  dispatch(actionCurrency(filterData));
};
