import React, { Component } from 'react';
import { connect } from 'react-redux';
// const  = props => {
class SmurForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        age: null,
        height: "",
        id: null
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createPost(post);

    
    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name: </label><br />
                    <input type="text" name="name" onChange={onChange} value={state.title} />
                </div>
                <br />
                <div>
                    <label>Age: </label><br />
                    <input name="age" onChange={onChange} value={state.age} />
                </div>
                <br />
                <div>
                    <label>Height: </label><br />
                    <input name="height" onChange={onChange} value={state.height} />
                </div>
                <br />
                <div>
                    <label>Id: </label><br />
                    <input name="id" onChange={onChange} value={state.id} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
// PostsForm.propTypes = {
//     createPost: PropTypes.func.isRequired
// };
export default SmurForm;
// export default connect(null, { addSmurf })(SmurForm);
