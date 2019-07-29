import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchReports} from "./../../actions";

class Reports extends Component {
  componentDidMount = () => {
    this.props.fetchReports();
  }
  render() {
    const {reports} = this.props;
    return
      (
        <>
          <Index resoure={reports} />
        </>
      );
  }
};

const mapPropsToState = (state) => {
  return {
    reports: state.reports
  }
}

export default connect(mapPropsToState, {fetchReports})(Reports);