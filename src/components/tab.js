import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const styles = {
    menuItem: {
        color: '#393939',
        cursor: 'pointer',
        fontSize: '30px',
        textAlign: 'center',
        marginRight:'30px',
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
    active: {
        color:'white',
        fontSize: '32px',
        borderBottom: '2px solid #808080'
    },
    font :{
        fontSize:'20px',
        fontFamily:'Comic Sans MS'
    }
};

const Tab = ({name, onClick,children,kind}) => {
    return (
        <div>
            <div onClick={onClick} style={[styles.menuItem,styles[kind]]}>
                <h1 style={styles.font}>{name}</h1>
            </div>
        </div>);
};

Tab.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    kind : PropTypes.oneOf(['active','inactive'])
};

export default Radium(Tab);