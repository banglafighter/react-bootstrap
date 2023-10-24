import TableCellSpec, {TableCellProps} from "@pfo/pf-boot-spec/boot/spec/table/TableCellSpec";
import {BootstrapUIState} from "react-boot-spec";
import CommonUtil from "@pfo/pf-boot-spec/boot/spec/common/common-util";


interface Props extends TableCellProps {

}

class State implements BootstrapUIState {
}

export default class TableCell extends TableCellSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<td {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "")}>{_props.children}</td>);
    }

}