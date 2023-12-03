import {BootstrapUIState, TableCellProps, TableCellSpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


interface Props extends TableCellProps {

}

class State implements BootstrapUIState {
}

export default class TableCell extends TableCellSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<td {...CommonUtil.addAllowedAttrs(_props)} {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "")}>{_props.children}</td>);
    }

}