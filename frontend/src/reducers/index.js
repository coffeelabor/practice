const initialState = {
    Global: {
        NewConfirmed: '',
        TotalConfirmed: ''
    }
};

export const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        default:
            return state;
    }
}