import {BootstrapUIState, RowProps, RowSpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


interface Props extends RowProps {

}

class State implements BootstrapUIState {
}

export default class Row extends RowSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "row")}>{_props.children}</div>);
    }

}