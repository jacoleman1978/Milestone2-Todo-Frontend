import {createContext} from 'react';

export const DeleteTodoContext = createContext({
    delFlag: false,
    handleDelClick: () => {}
});