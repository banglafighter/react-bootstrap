import DialogHeaderSpec, {DialogHeaderProps} from "@pfo/pf-boot-spec/boot/spec/dialog/DialogHeaderSpec";
import {BootstrapUIState} from "react-boot-spec";


interface Props extends DialogHeaderProps {

}

class State implements BootstrapUIState {
}

export default class DialogHeader extends DialogHeaderSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (
            <div className="modal-header">
                {this.props.children}
            </div>
        );
    }

}