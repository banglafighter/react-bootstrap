import React from "react";
import Input from "./Input";
import {InputViewHelper} from "./common/input-view-helper";
import {BootstrapUIState, TextFieldProps, TextFieldSpec} from "react-boot-spec";
import {InputType} from "react-boot-spec/boot/spec/InputSpec";


interface Props extends TextFieldProps {
    inputGroupClass?: string
}

class State implements BootstrapUIState {
    isShowPassword: boolean = false
}

export default class TextField extends TextFieldSpec<Props, State> {
    private inputReference: any
    static defaultProps = {
        wrapperClass: "mb-3",
        inputGroupClass: "input-group"
    }

    state: State = new State()

    private getWrapperClass() {
        let wrapperClass = ""
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
            case "switch":
                wrapperClass = "d-inline-flex align-items-center"
                break
        }
        return InputViewHelper.getWrapperClass(this.props, wrapperClass)
    }


    private showHidePassword() {
        this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
    }

    private getPasswordInput(input: any) {
        const _props = this.props;
        let _input = this.setInputAttributes(this.getInputClass("password-modify-input"), _props.defaultValue, _props.type, _props.onChange)
        let beforeInput = (
            <div className="input-group-text password-input-group-text">
                <button type="button" className="border-none bg-white password-icon-button" onClick={()=>{this.showHidePassword()}}>
                    {this.state.isShowPassword ? (<i className="bi bi-eye"></i>) : (<i className="bi bi-eye-slash"></i>)}
                </button>
            </div>
        )
        let extraWrapperClass = InputViewHelper.addValidationClass(this.props, "password-modify-input-wrapper")
        return this.setBeforeAfter(_input, "", beforeInput, extraWrapperClass)
    }

    private wrapContent(firstContent: any, secondContent: any) {
        return (
            <React.Fragment>
                {firstContent}
                {secondContent}
            </React.Fragment>
        )
    }

    private isToggleInputChecked() {
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
            case "switch":
                if (this.props.value) {
                    return true
                }
                break
            default:
                return false
        }
    }

    getInputRef() {
        if (this.inputReference) {
            return this.inputReference.getInputRef()
        }
    }

    private setInputAttributes(className: any = "", defaultValue: any, inputType?: InputType, onChange?: any) {
        const _props = this.props;
        const _this = this;
        return <Input
            ref={(ref: any) => {
                _this.inputReference = ref
            }}
            defaultValue={defaultValue}
            type={this.state.isShowPassword && inputType === "password" ? "text" : inputType}
            viewSize={_props.viewSize}
            readOnly={_props.readOnly}
            disabled={_props.disabled}
            placeholder={_props.placeholder}
            required={_props.required}
            value={_props.value}
            name={_props.name}
            autoComplete={_props.autoComplete}
            autoFocus={_props.autoFocus}
            id={_props.id}
            className={className}
            onBlur={_props.onBlur}
            onChange={(event: any) => {
                if (onChange) {
                    onChange(event)
                }
            }}
            onFocus={_props.onFocus}
            onKeyDown={_props.onKeyDown}
            onKeyUp={_props.onKeyUp}
            checked={this.isToggleInputChecked()}
        />
    }

    private getInputClass(klass = "") {
        if (this.props.className) {
            klass += this.props.className
        }
        return InputViewHelper.addValidationClass(this.props, klass)
    }

    private setBeforeAfter(input: any, before: any, after: any, wrapperExtraClass: string = "") {
        const _props = this.props;
        wrapperExtraClass = InputViewHelper.concatClass(InputViewHelper.getClass(_props.inputGroupClass), wrapperExtraClass)
        if (!before && !after) {
            return input
        }
        return (
            <div className={wrapperExtraClass}>
                {before}
                {input}
                {after}
            </div>
        )
    }

    private getToggleInput(input: any) {
        let klass = ""
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
                klass = "form-check"
                break
            case "switch":
                klass = "form-check form-switch"
                break
        }
        return (
            <div className={klass}>
                {input}
            </div>
        )
    }

    private getInput() {
        const _props = this.props;
        let label = InputViewHelper.getLabel(_props)
        let input = this.setInputAttributes(this.getInputClass(), _props.defaultValue, _props.type, _props.onChange)
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
            case "switch":
                input = this.wrapContent(input, label)
                return this.getToggleInput(input)
            case "password":
                input = this.getPasswordInput(input)
                return this.wrapContent(label, input)
            default:
                input = this.setBeforeAfter(input, _props.beforeInput, _props.afterInput)
                return this.wrapContent(label, input)
        }
    }

    private getWrapper(content: any) {
        let wrapper = this.getWrapperClass()
        if (wrapper !== "") {
            return (
                <div className={wrapper}>
                    {content}
                </div>
            )
        }
        return content;
    }

    render() {
        const _props = this.props;
        if (_props.isHideInput) {
            return ""
        }
        let content = (
            <>
                {this.getInput()}
                {InputViewHelper.getErrorContent(_props)}
                {InputViewHelper.getSuccessContent(_props)}
                {InputViewHelper.getHelperContent(_props)}
            </>
        );
        return this.getWrapper(content);
    }

}