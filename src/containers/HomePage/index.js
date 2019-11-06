import React from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { ParentDiv, WidgetContainer, MapContainer } from "./HomePage";
import Widget from "components/Widget";
import Map from "components/Map";
import Chart from "components/Chart";
import PropTypes from "prop-types";


// This case we use the layout in the route instead of the component directly
const HomePage = ({ intl }) => {
  return (
    <ParentDiv>
      <WidgetContainer>
        <Widget title={intl.formatMessage({ id: "app.components.Widget.Infraestructures" })}>
          <Chart />
        </Widget>
        <Widget title={intl.formatMessage({ id: "app.components.Widget.Operation" })}>
          NO DATA
        </Widget>
        <Widget title={intl.formatMessage({ id: "app.components.Widget.WaterQuality" })}>
          NO DATA
        </Widget>
      </WidgetContainer>
      <MapContainer>
        <Map></Map>
      </MapContainer>
    </ParentDiv>
  );
};

HomePage.propTypes = {
  intl: PropTypes.object.isRequired,
}

// This works
/*const mapStateToProps = (state) => ({
    todoList:state.todoList.todoList
})*/

// This works better in case of state tree is modified

/*const selectTodoList = (state) => {
    return state.todoList.todoList
}

const mapStateToProps = (state) => ({
    todoList:selectTodoList(state)
})
*/

// This works better in terms of performance using createStructuredSelector and selectors
const mapStateToProps = createStructuredSelector({
  // todoList: makeSelectTodoList()
});

export default connect(mapStateToProps)(injectIntl(HomePage));
