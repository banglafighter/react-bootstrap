import {BootstrapUIState, CardProps, CardSpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


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