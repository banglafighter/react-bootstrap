import TableBodySpec, {TableBodyProps} from "@pfo/pf-boot-spec/boot/spec/table/TableBodySpec";
import {BootstrapUIState} from "react-boot-spec";
import CommonUtil from "@pfo/pf-boot-spec/boot/spec/common/common-util";


interface Props extends TableBodyProps {

}

class State implements BootstrapUIState {
}

export default class TableBody extends TableBodySpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<tbody {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "")}>{_props.children}</tbody>);
    }

}