import React from "react";
import {InputViewHelper} from "./common/input-view-helper";
import {BootstrapUIState, DropdownProps, DropdownSpec} from "react-boot-spec";

interface Props extends DropdownProps {

}

class State implements BootstrapUIState {
    wrapperPlaceholderName: any = ""
}

export default class Dropdown extends DropdownSpec<Props, State> {

    state: State = new State();

    static defaultProps = {
        wrapperTagName: "ul",
        itemTagName: "li",
    }

    componentDidMount() {
        this.setState({wrapperPlaceholderName: this.props.wrapperPlaceholder})
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.wrapperPlaceholder !== prevProps.wrapperPlaceholder) {
            this.setState({wrapperPlaceholderName: this.props.wrapperPlaceholder})
        }
    }

    private onClickItem(item: any, key: any) {
        if (this.props.itemOnClick) {
            this.props.itemOnClick(item, key, this.props.itemList)
        }
        if (this.props.enableSelectValue) {
            this.setState({wrapperPlaceholderName: item})
        }
    }

    private getItemView(item: any, key: any, itemTagName: any, itemLoopCallBack: any) {
        let itemView = item
        if (itemLoopCallBack) {
            itemView = itemLoopCallBack(item, key)
        }
        let ItemTagName: any = itemTagName
        let className = InputViewHelper.concatClass(InputViewHelper.getClass(this.props.itemClassName), "dropdown-item")
        return (
            <ItemTagName onClick={(event: any) => this.onClickItem(item, key)} key={key} id={this.props.itemId} className={className}>
                {itemView}
            </ItemTagName>
        )
    }


    render() {
        const _this = this;
        const _props = this.props;
        const {wrapperPlaceholder, itemList, itemLoopCallBack} = _props
        const WrapperTagName: any = _props.wrapperTagName
        const itemTagName: any = _props.itemTagName
        let className = InputViewHelper.concatClass(InputViewHelper.getClass(this.props.wrapperClassName), "dropdown-menu")
        return (
            <div className="dropdown">
                <span data-bs-toggle="dropdown">
                    {_this.state.wrapperPlaceholderName}
                </span>
                <WrapperTagName className={className} id={this.props.wrapperId}>
                    {itemList.map(
                        (item: any, key: any) => (
                            _this.getItemView(item, key, itemTagName, itemLoopCallBack)
                        ))
                    }
                </WrapperTagName>
            </div>
        );
    }

}