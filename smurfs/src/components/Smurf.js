import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSMURF } from "../store/actions";

const Smurf = props => {
  useEffect(() => {
    props.fetchSMURF();
  }, [])
  return (
    <main>
      <h1>Smurf</h1>
      {props.isFetching && <h3>Fetching data...</h3>}
      {props.smurf && <div className='success'>
         
       
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
    error: state.smurf.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSMURF }
)(Smurf);