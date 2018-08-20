const initialState = {
    selectedTab: 0
};

function selectTab(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_TAB':
            return {
                selectedTab: action.selectedTab
            };
        default:
            return state;
    }
}

export default selectTab;