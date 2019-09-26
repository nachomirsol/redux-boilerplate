import React from 'react';

const withToggle = (WrappedComponent) =>

    class WithToggle extends React.PureComponent {
        constructor() {
            super()
            this.state = {
                toggleStatus: false,
            }
        }

        toggle = () => {
            this.setState({
                toggleStatus: !this.state.toggleStatus
            })
        }

        render() {
            const { toggleStatus } = this.state
            return <WrappedComponent {...this.props} toggle={this.toggle} toggleStatus={toggleStatus} />;
        }
    }


export default withToggle