import {BootstrapUIState, TableHeadProps, TableHeadSpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


interface Props extends TableHeadProps {

}

class State implements BootstrapUIState {
}

export default class TableHead extends TableHeadSpec<Props, State> {

    static defaultProps = {
        color: "secondary"
    }

    private getColorClass() {
        let klass = ""
        let color = String(this.props.color)
        if (color !== "default") {
            klass = " table-" + color
        }
        return klass
    }

    private getClass() {
        let klass = ""
        klass += this.getColorClass()
        return klass
    }


    render() {
        const _props = this.props;
        return (<thead {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, this.getClass())}>{_props.children}</thead>);
    }

}