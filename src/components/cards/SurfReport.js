import React, {Component} from "react";

const rectangularCardHolder = {
  backgroundColor: "#1C103F",
  color: "#F7F7F8",
  // display: "flex",
  // flexDirection: "row",
  alignItems: "center",
  margin: "1.75%",
  boxShadow: "11px 11px 17px -7px rgba(0,0,0,0.67)"
};


class SurfReport extends Component {
  render() {
    const {report} = this.props;

    return(
        <div className="surf-report" style={rectangularCardHolder}>
          {Object.keys(report).map(key => {
            return (
              <h2 key={key+report._id}>{key}: {report[`${key}`]}</h2>
            )
          })}
        </div>
      );
  }
};

export default SurfReport;