import {useDispatch} from 'react-redux';
import {removeTodo, toggleTodo} from '../reducers/todoSlice';

const TodoItem = ({id, text, completed}) => {
	const dispatch = useDispatch();

	return (
		<li>
			<input
				type='checkbox'
				checked={completed}
				onChange={() => dispatch(toggleTodo({id}))}
			/>
			<span>{text}</span>
			<span onClick={() => dispatch(removeTodo({id}))}>&times;</span>
		</li>
	);
};

export default TodoItem;