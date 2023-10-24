import {BootstrapUIState, CardContentProps, CardContentSpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


interface Props extends CardContentProps {

}

class State implements BootstrapUIState {
}

export default class CardContent extends CardContentSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "card-body")}>{_props.children}</div>);
    }

}