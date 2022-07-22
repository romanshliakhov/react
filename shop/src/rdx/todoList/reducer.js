const initialState = {
    tasks: [
        {
            id: '1',
            title: 'Ivan',
            desctiption: 'Ivan Pink',
            type: 'category',
            price: '2000',
            units: '1'
        },
        {
            id: '2',
            title: 'Taras',
            desctiption: 'Taras Step',
            type: 'category',
            price: '2000',
            units: '5'
        },
        {
            id: '3',
            title: 'Olga',
            desctiption: 'Olga First',
            type: 'category',
            price: '1000',
            units: '10'
        },
        {
            id: '4',
            title: 'Semen',
            desctiption: 'Semen Dog',
            type: 'category',
            price: '1000',
            units: '3'
        }
    ]
}

export const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}