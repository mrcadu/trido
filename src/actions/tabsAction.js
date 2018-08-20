const SELECT_TAB = 'SELECT_TAB';
export function selectTab(selectedTab){
    return {
        type: SELECT_TAB,
        selectedTab,
    }
}