import { Reducer, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducers: Reducer<any> = combineReducers<any>( {
  form: reduxFormReducer,
});

export default rootReducers;