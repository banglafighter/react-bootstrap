import DialogContentSpec, {DialogContentProps} from "@pfo/pf-boot-spec/boot/spec/dialog/DialogContentSpec";
import {BootstrapUIState} from "react-boot-spec";


interface Props extends DialogContentProps {

}

class State implements BootstrapUIState {
}

export default class DialogContent extends DialogContentSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (
            <div className="modal-body">
                {this.props.children}
            </div>
        );
    }

}