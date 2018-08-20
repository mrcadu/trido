import React from 'react'
import {connect} from 'react-redux'
import {selectTab} from '../actions/tabsAction'
import {bindActionCreators} from "redux";

const Tabs  = ({children,selectedTab,handleClick, dispatch,selectTab}) => {
        return (
            <div>
                {children.map((child,index) => {
                    return React.cloneElement(child, {  name: child.props.name,
                                                        key:'tab'.concat(index) ,
                                                        kind: (selectedTab===index ? 'active' : 'inactive') ,
                                                        onClick:(() => selectTab(index))});
                })}
            </div>
        );
};
function mapStateToProps(state) {
    return {
        selectedTab: state.tabsReducer.selectedTab
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectTab},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Tabs);