import DialogFooterSpec, {DialogFooterProps} from "@pfo/pf-boot-spec/boot/spec/dialog/DialogFooterSpec";
import {BootstrapUIState} from "react-boot-spec";


interface Props extends DialogFooterProps {

}

class State implements BootstrapUIState {
}

export default class DialogFooter extends DialogFooterSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (
            <div className="modal-footer">
                {this.props.children}
            </div>
        );
    }

}