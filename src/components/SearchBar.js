import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        const myArray = this.state.value.split("#");
        window.location.href = "historique?pseudo=" + myArray[0] + "&tag=" + myArray[1];
        event.preventDefault();

    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Pseudo#Tag"/>
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </>
        )
    }
}
