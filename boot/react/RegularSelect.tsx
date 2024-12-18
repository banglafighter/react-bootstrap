import React from "react";
import {InputViewHelper} from "./common/input-view-helper";
import {BootstrapUIState, SelectSpec, SelectProps as SelectPropsSpec} from "react-boot-spec";
import SelectCommon from "./common/select-common";

export interface SelectProps extends SelectPropsSpec {
    wrapperClass?: string
    addWrapperClass?: string
}

export class RegularSelectState implements BootstrapUIState {
    value: any = null;
    options: any = [];
}


export default class RegularSelect extends SelectSpec<SelectProps, RegularSelectState> {

    state: RegularSelectState = new RegularSelectState();

    static defaultProps = {
        wrapperClass: "mb-3",
    }

    constructor(props: SelectProps) {
        super(props);
    }

    componentDidMount() {
        SelectCommon.loadOption(this);
    }

    componentDidUpdate(prevProps: SelectProps) {
        if (prevProps.options !== this.props.options || prevProps.value !== this.props.value) {
            SelectCommon.loadOption(this);
        }
    }

    getPlaceholder() {
        const _props = this.props;
        if (_props.placeholder) {
            return <option value="" disabled selected hidden>{_props.placeholder}</option>
        }
        return ""
    }

    render() {
        const _props = this.props;
        const _this = this;

        let klass = InputViewHelper.getClass(_props.className, "form-select")
        klass = InputViewHelper.addValidationClass(_props, klass)

        let htmlSelect: any = (
            <select
                disabled={_props.disabled}
                className={klass}
                name={_props.name}
                multiple={_props.isMulti}
                id={_props.id}
                onChange={(event: any) => {
                    SelectCommon.onChange(event.target, _this)
                }}
            >
                {_this.getPlaceholder()}
                {_this.state.options.map((data: any, index: any) => {
                    let selectedData: any = _this.state.value
                    let selectedValue: any
                    if (selectedData) {
                        selectedValue = selectedData.value
                    }
                    return (
                        <option key={index} value={data.value} selected={data.value === selectedValue}>
                            {data.label}
                        </option>
                    )
                })}
            </select>
        )

        return SelectCommon.wrapContent(htmlSelect, _this)
    }

}