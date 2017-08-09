import _ from 'lodash';
import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';
import { DELETE_POST } from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case DELETE_POST:
			return _.omit(state, action.payload);
		case FETCH_POST:
			//es5 plain js way
			// const post = action.payload.data;
			// const newState = {...state };
			// newState[post.id] = post;
			// return newState;
			return { ...state, [acton.payload.data.id]: action.payload.data };
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}