import {BootstrapUIState, CardFooterProps, CardFooterSpec} from "react-boot-spec";
import {CommonUtil} from "react-boot-spec";


interface Props extends CardFooterProps {

}

class State implements BootstrapUIState {
}

export default class CardFooter extends CardFooterSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "card-footer")}>{_props.children}</div>);
    }

}