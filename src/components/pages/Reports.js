import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchReports} from "./../../actions";
import SurfReport from "./../cards/SurfReport";

class Reports extends Component {
  componentDidMount = () => {
    this.props.fetchReports();
  }
  render() {
    const {reports} = this.props;
    return(
      <>
        <h1>Surf Reports</h1>
        {reports.map(report => {
          return(
            <SurfReport report={report} key={report._id} />
            )
        })}
      </>
     )
        
  }
};

const mapPropsToState = (state) => {
  return {
    reports: state.reports
  }
}

export default connect(mapPropsToState, {fetchReports})(Reports);