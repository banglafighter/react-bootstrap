import CardHeaderSpec, {CardHeaderProps} from "@pfo/pf-boot-spec/boot/spec/card/CardHeaderSpec";
import {BootstrapUIState} from "react-boot-spec";
import CommonUtil from "@pfo/pf-boot-spec/boot/spec/common/common-util";

interface Props extends CardHeaderProps {

}

class State implements BootstrapUIState {
}

export default class CardHeader extends CardHeaderSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "card-header")}>{_props.children}</div>);
    }

}