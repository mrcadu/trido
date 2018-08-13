import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Tabs extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentActiveTab:0
        }
    }

    render() {
        return (
            <div>
                {this.props.children.map((child) => {
                    return React.cloneElement(child,{name:"teste",kind:'active'})
                })}
            </div>
        );
    }

}
Tabs.propTypes ={
};
export default Tabs