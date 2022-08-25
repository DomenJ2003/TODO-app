import { uuid } from '../utils';
import {
    SHOW_TODO_MODAL,
    HIDE_TODO_MODAL,
    TODO_ADD,
    TODO_DELETE,
    TODO_EDIT,
    TODO_CHANGE_STATUS,
    TODO_CHANGE_SEARCH,
} from './../actions/types';

const temp = [
    {
        title: 'A',
        description: 'dlasda',
        ident: uuid(),
        date_created: (new Date()).toJSON(),
        done: false,
    },
    {
        title: 'ab',
        description: 'dlasda',
        ident: uuid(),
        date_created: (new Date()).toJSON(),
        done: false,
    },
    {
        title: 'b',
        description: 'dlasda',
        ident: uuid(),
        date_created: (new Date()).toJSON(),
        done: true,
    },
    {
        title: 'c',
        description: 'dlasda',
        ident: uuid(),
        date_created: (new Date()).toJSON(),
        done: false,
    },
]

const initialState = {
    todoData: temp,
    _allTodoData: temp,
    todoModalVisible: false,
    search: ''
}


const updateWithVisible = (state)=>{
    const foundTodos = state._allTodoData.filter((todo)=>{
        return todo.title.toLowerCase().includes(state.search.toLowerCase());
    }
    );

    return {...state, todoData: foundTodos}
}

export default function(state = initialState, action){
    switch(action.type){
        case HIDE_TODO_MODAL:
            return {
                ... state , todoModalVisible: false
            };
        case SHOW_TODO_MODAL:
            return {
                ... state , todoModalVisible: true
            };
        case TODO_ADD:
            return updateWithVisible({
                ... state, _allTodoData:[...state._allTodoData, action.payload]
            });
        case TODO_DELETE:
            const newTodos = state._allTodoData.filter(todo=> todo.ident !== action.payload)
            return updateWithVisible({
                ... state, _allTodoData: newTodos
            });

        case TODO_CHANGE_STATUS:
            const changedTodos = state._allTodoData.map((todo)=>{
                if(todo.ident !== action.payload.ident){
                    return todo;
                }
                return {...todo, done: action.payload.done}
            }) 
            return updateWithVisible({
                ... state, _allTodoData: changedTodos
            });
        
        case TODO_CHANGE_SEARCH:
            return updateWithVisible({
                ...state, search: action.payload
            })
        
        default:
            return state;
    }
}