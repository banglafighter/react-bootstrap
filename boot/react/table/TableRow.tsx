import {BootstrapUIState, TableRowProps, TableRowSpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


interface Props extends TableRowProps {

}

class State implements BootstrapUIState {
}

export default class TableRow extends TableRowSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<tr {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "")}>{_props.children}</tr>);
    }

}