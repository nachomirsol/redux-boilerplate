import React from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { makeSelectTodoList } from "./selectors";
import { ParentDiv, WidgetContainer, MapContainer } from "./HomePage";
import Widget from "components/Widget";
import Map from "components/Map";

// This case we use the layout in the route instead of the component directly
const HomePage = ({ intl }) => {
  return (
    <ParentDiv>
      <WidgetContainer>
        <Widget title={intl.formatMessage({ id: "INFRAESTRUCTURES" })}>
          text
        </Widget>
        <Widget title={intl.formatMessage({ id: "INFRAESTRUCTURES" })}>
          asdsadsad
        </Widget>
        <Widget title={intl.formatMessage({ id: "INFRAESTRUCTURES" })}>
          rrrr
        </Widget>
      </WidgetContainer>
      <MapContainer>
        <Map></Map>
      </MapContainer>
    </ParentDiv>
  );
};

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
  todoList: makeSelectTodoList()
});

export default connect(mapStateToProps)(injectIntl(HomePage));
