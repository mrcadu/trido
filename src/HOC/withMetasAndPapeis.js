import React from 'react'

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
            const url = process.env.REACT_APP_FETCH_URL;
            fetch(url.concat("/api/metas"))
                .then(response => response.json())
                .then(response => this.setState({metas: this.selectJsonConverter(response)}));
            fetch(url.concat("/api/papeis"))
                .then(response => response.json())
                .then(response => this.setState({papeis: this.selectJsonConverter(response)}));
        }

        render() {
            return <WrappedComponent metas = {this.state.metas} papeis={this.state.papeis} {...this.props}/>
        }
    }
    return Component;
};

export default WithMetasAndPapeis;