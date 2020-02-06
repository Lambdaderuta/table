import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";

import doRequest from "../Actions";
import SimpleTable from "../Components/Table";

class Container extends React.PureComponent {
  state = {
    filteredData: [],
    searchValue: ""
  };

  componentDidMount() {
    const { onDoRequest } = this.props;

    onDoRequest();
  }

  componentDidUpdate(prevProps) {
    const { data, isLoading } = this.props;
    if (prevProps && prevProps.data.length !== data.length && !isLoading) {
      this.setState(pS => ({ ...pS, filteredData: data }));
    }
  }

  handleChange = event => {
    const { data } = this.props;
    const {
      target: { value }
    } = event;

    if (value) {
      const re = new RegExp(`^${value}`);
      const filteredData = data.filter(el => {
        return re.test(el.id);
      });

      this.setState(pS => ({ ...pS, filteredData, searchValue: value }));
    } else {
      this.setState(pS => ({ ...pS, searchValue: value }));
    }
  };

  render() {
    const { data, isLoading, hasError } = this.props;
    const { filteredData, searchValue } = this.state;

    return (
      <>
        <TextField
          placeholder="Фильтрация"
          id="standard-basic"
          label="Standard"
          value={searchValue}
          onChange={this.handleChange}
          fullWidth
        />
        <SimpleTable
          data={!searchValue ? data : filteredData}
          isLoading={isLoading}
          hasError={hasError}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  const {
    table: { isLoading, data, hasError }
  } = state;
  return {
    isLoading,
    data,
    hasError
  };
};

const mapDispatchToProps = {
  onDoRequest: doRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Container)