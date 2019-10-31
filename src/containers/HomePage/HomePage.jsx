import styled from "styled-components/macro";

const ParentDiv = styled.div`
  height: 100%;
`;

const WidgetContainer = styled.div`
  display: flex;
  width: 100%;
  .widget {
    margin-bottom: 16px;
  }
  .widget:not(:last-child) {
    margin-right: 16px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  height: 33%;
`;

const MapContainer = styled.div`
  height: 66%;
`;

export { ParentDiv, WidgetContainer, MapContainer };
