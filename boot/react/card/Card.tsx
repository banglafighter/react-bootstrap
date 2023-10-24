import CardSpec, {CardProps} from "@pfo/pf-boot-spec/boot/spec/card/CardSpec";
import {BootstrapUIState} from "react-boot-spec";
import CommonUtil from "@pfo/pf-boot-spec/boot/spec/common/common-util";


interface Props extends CardProps {

}

class State implements BootstrapUIState {
}

export default class Card extends CardSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "card")}>{_props.children}</div>);
    }

}