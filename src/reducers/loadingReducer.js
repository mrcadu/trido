const initialState = {
    loading: false
};

function load(state = initialState, action) {
    switch (action.type) {
        case 'load':
            return {
                loading: true
            };
        case 'unload':
            return{
                loading:false
            };
        default:
            return state;
    }
}

export default load;