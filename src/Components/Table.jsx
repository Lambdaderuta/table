import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
import { Table, Column } from "react-virtualized";

const useStyles = makeStyles(theme => ({
  loader: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));

export default function SimpleTable(props) {
  const { data, isLoading, hasError } = props;
  const classes = useStyles();

  const height = document.documentElement.clientHeight;
  const width = document.documentElement.clientWidth;

  return (
    <>
      {!isLoading ? (
        <Table
          width={width}
          height={height}
          headerHeight={60}
          rowHeight={80}
          rowCount={data.length}
          headerStyle={{ border: "0.4px black solid" }}
          rowStyle={{ display: "flex" }}
          rowGetter={({ index }) => data[index]}
        >
          <Column width={500} label="id" dataKey="id" />
          <Column width={500} label="text" dataKey="text" />
          <Column
            cellRenderer={({ columnData }) => moment(columnData).format("L")}
            style={{ display: "flex" }}
            label="date"
            dataKey="date"
            width={500}
          />
        </Table>
      ) : (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}
