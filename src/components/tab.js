import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const styles = {
    menuItem: {
        color: '#393939',
        cursor: 'pointer',
        fontSize: '30px',
        textAlign: 'center',
        width: '15%',
        borderBottom: '1px solid #808080',
        ':hover': {
            fontSize: '32px',
            borderBottom: '2px solid #808080'
        },
        ':active': {
            fontSize: '32px',
            borderBottom: '2px solid #808080'
        }
    },
    menuContent: {
        width: '65%',
        float:'right',
        top:0,
    },
    active: {
        fontSize: '32px',
        borderBottom: '2px solid #808080'
    }
};

const Tab = ({name, onClick,children,kind}) => {
    return (
        <div>
            <div onClick={onClick} style={[styles.menuItem,styles[kind]]}>
                <span>{name}</span>
            </div>
            <div style={styles.menuContent}>
                {kind === "active" ? children : null}
            </div>
        </div>);
};

Tab.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    kind : PropTypes.oneOf(['active','inactive'])
};

export default Radium(Tab);