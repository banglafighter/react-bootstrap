import {BootstrapUIState, LoadingIndicatorProps, LoadingIndicatorSpec} from "react-boot-spec";

interface Props extends LoadingIndicatorProps {

}

class State implements BootstrapUIState {
}

export default class LoadingIndicator extends LoadingIndicatorSpec<Props, State> {

    static defaultProps = {
        viewColor: "primary"
    }


    render() {
        const _props = this.props;
        return (
            <div className="loading-indicator-position">
                <div className={"spinner-border text-" + _props.viewColor} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

}