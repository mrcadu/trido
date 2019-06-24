import React from 'react'
import {load} from "../actions/loadingAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const WithMetasAndPapeis = (WrappedComponent ) => {
    class Component extends React.Component {
        constructor(props) {
            super(props);
            this.selectJsonConverter = this.selectJsonConverter.bind(this);
            this.state = {
                metas: [],
                papeis: []
            }
        }

        selectJsonConverter(jsonList) {
            const selectOptions = [];
            jsonList.forEach(element => {
                let currentOption = {
                    value: element.nome,
                    label: element.nome
                };
                selectOptions.push(currentOption)
            });
            return selectOptions;
        }

        componentDidMount() {
            this.props.load(true);
            const url = process.env.REACT_APP_FETCH_URL;
            fetch(url.concat("/metas"))
                .then(response => response.json())
                .then(response => this.setState({metas: this.selectJsonConverter(response)}));
            fetch(url.concat("/papeis"))
                .then(response => response.json())
                .then(response => {
                    this.setState({papeis: this.selectJsonConverter(response)});
                    this.props.load(false);
                });
        }

        render() {
            return <WrappedComponent metas = {this.state.metas} papeis={this.state.papeis} {...this.props}/>
        }
    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({load}, dispatch);
    }
    function mapStateToProps(state) {
        return {

            loading: state.loadingReducer.loading
        };
    }
    return connect(mapStateToProps, mapDispatchToProps)(Component);
};

export default WithMetasAndPapeis;
