import { ADD, DELETE } from '../actions/item.action';

const todoReducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [...state, { id: new Date().toISOString(), text: action.payload }];
		case DELETE:
			return state.filter((i) => i.id !== action.payload.id);
		default:
			return state;
	}
};

export default todoReducer;
