import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSmurf } from '../store/actions';

class SmurForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            height: "",
            id: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        console.log('submit ',e);
        // e.preventDefault();
        const post = {
            name: this.state.name,
            id: this.state.id,
            height: this.state.height,
            age: this.state.age,
        };
        this.props.addSmurf(post);
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name: </label><br />
                        <input type="text" name="name" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Age: </label><br />
                        <input name="age" onChange={this.onChange} value={this.state.age} />
                    </div>
                    <br />
                    <div>
                        <label>Height: </label><br />
                        <input name="height" onChange={this.onChange} value={this.state.height} />
                    </div>
                    <br />
                    <div>
                        <label>Id: </label><br />
                        <input name="id" onChange={this.onChange} value={this.state.id} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

}
SmurForm.propTypes = {
    SmurForm: PropTypes.func.isRequired
};
export default connect(null, { addSmurf })(SmurForm);
