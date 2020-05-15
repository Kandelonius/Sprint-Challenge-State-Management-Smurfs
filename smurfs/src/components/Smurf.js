import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurf, addSmurf } from "../store/actions";

const Smurf = props => {
    useEffect(() => {
        props.fetchSmurf();
    }, []);
    //   useEffect(() => {
    //     props.addSmurf();
    //   }, []);
    console.log('AE', props);
    return (
        <main>
            <h1>Smurf</h1>
            {props.isFetching && <h3>Fetching data...</h3>}
            {props.smurf && <div className='success'>
                {props.smurf.map(smurf => (
                    <h4 key={smurf.id}>name: {smurf.name} age: {smurf.age}</h4>
                ))}
            </div>}
            {props.add && <div className='success'>
      {props.smurf.map(smurf => (
          <h4 key={smurf.id}>name: {smurf.name} age: {smurf.age}</h4>
        ))}
      </div>}
            {props.error && <div className='failure'>
                <h1>{props.error}</h1>
            </div>}
        </main>
    );
};

const mapStateToProps = state => {
    console.log('BRE', state.smurf);
    return {
        isFetching: state.smurf.isFetching,
        smurf: state.smurf.smurf,
        add: state.smurf.add,
        error: state.smurf.error
    };
};

export default connect(
    mapStateToProps,
    { fetchSmurf, addSmurf }
)(Smurf);