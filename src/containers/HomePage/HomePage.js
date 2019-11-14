import React from "react";
/*Librarys*/
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
/* Components */
import Widget from "components/Widget";
import OverallInfoWidgetContent from "./components/OverallInfoWidgetContent";
import Map from "components/Map";
import { Chart } from "components/Chart";
/* Mock data*/
import { chartData } from 'mockData/chartData';
/* Styles */
import "./homePage.scss";

// This case we use the layout in the route instead of the component directly
const HomePage = ({ intl }) => {
  return (
    <div className="homePage homePage__wrapper">
      <div className="widget__container">
        <Widget title={intl.formatMessage({ id: "app.components.Widget.Header.Title.Infraestructures" })}>
          {/*<Chart type={'pie'} title={''} subtitle={''} data={chartData} />*/}
          <OverallInfoWidgetContent
            icons={[{ name: "question", text: "Comunicación" }, { name: "cog", text: "Config" }, { name: "bolt", text: "Alarmas" }]}
            minRange={""}
            maxRange={""}
          />
        </Widget>

        <Widget title={intl.formatMessage({ id: "app.components.Widget.Header.Title.Operation" })}>
          <OverallInfoWidgetContent
            icons={[{ name: "question", text: "Comunicación" }, { name: "cog", text: "Config" }, { name: "bolt", text: "Alarmas" }]}
            minRange={""}
            maxRange={""}
          />
          {/** Consider this icosn data inside a config file */}
        </Widget>

        <Widget title={intl.formatMessage({ id: "app.components.Widget.Header.Title.WaterQuality" })}>
          <OverallInfoWidgetContent
            icons={[{ name: "broadcast-tower", text: "Comunicación" }, { name: "bell", text: "Alarmas" }]}
            minRange={"0.45"}
            maxRange={"0.96"}
          />
          {/** Consider this icosn data inside a config file */}
        </Widget>
      </div>
      <div className="map__container">
        <Map></Map>
      </div>
    </div>
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
