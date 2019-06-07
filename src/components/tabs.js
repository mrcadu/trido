import React from 'react'
import {connect} from 'react-redux'
import {selectTab} from '../actions/tabsAction'
import {bindActionCreators} from "redux";

const styles = {
    conteudoMenu:{
        display: 'flex',
        justifyContent: 'center',
        marginTop:'50px'
    },
    conteudo: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#1abc9c',
        width: '100%'
    },
    menuContent:{
        width: '65%',
    }
};
const Tabs = ({children, selectedTab, handleClick, dispatch, selectTab}) => {
    return (
        <div>
            <div style={styles.conteudo}>
                {children.map((child, index) => {
                    return React.cloneElement(child, {
                        name: child.props.name,
                        key: 'tab'.concat(index),
                        kind: (selectedTab === index ? 'active' : 'inactive'),
                        onClick: (() => selectTab(index))
                    });
                })}
            </div>
            <div style={styles.conteudoMenu}>
                <div style={styles.menuContent}>
                    {children[selectedTab].props.children}
                </div>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        selectedTab: state.tabsReducer.selectedTab
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectTab}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);