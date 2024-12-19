import React from "react";
import {InputViewHelper} from "./common/input-view-helper";
import {BootstrapUIState, SelectSpec, SelectProps as SelectPropsSpec} from "react-boot-spec";
import SelectCommon from "./common/select-common";

export interface SelectProps extends SelectPropsSpec {
    wrapperClass?: string
    addWrapperClass?: string
    onLoadSelectedValue?: (value: any) => void
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

    getSelectedRawData(event: any, options: any) {
        let dataIndex: any = event.target[event.target.selectedIndex].getAttribute('data-index')
        return options[dataIndex]
    }

    render() {
        const _props = this.props;
        const _this = this;

        let klass = InputViewHelper.getClass(_props.className, "form-select")
        klass = InputViewHelper.addValidationClass(_props, klass)
        let currentSelectedValue: any

        let htmlSelect: any = (
            <select
                disabled={_props.disabled}
                className={klass}
                name={_props.name}
                multiple={_props.isMulti}
                id={_props.id}
                onChange={(event: any) => {
                    let eventData: any = _this.getSelectedRawData(event, _this.state.options)
                    SelectCommon.onChange(eventData, _this)
                }}
            >
                {_this.getPlaceholder()}
                {_this.state.options.map((data: any, index: any) => {
                    let selectedData: any = _this.state.value
                    let selectedValue: any
                    if (selectedData) {
                        selectedValue = selectedData.value
                    }
                    let isSelected: boolean = false
                    if (data.value === selectedValue) {
                        isSelected = true
                        currentSelectedValue = data
                    }
                    return (
                        <option data-index={index} key={index} value={data.value} selected={isSelected}>
                            {data.label}
                        </option>
                    )
                })}
            </select>
        )

        if (_props.onLoadSelectedValue && currentSelectedValue) {
            _props.onLoadSelectedValue(currentSelectedValue)
        }

        return SelectCommon.wrapContent(htmlSelect, _this)
    }

}