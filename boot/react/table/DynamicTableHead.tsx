import TableHead from "./TableHead";
import TableRow from "./TableRow";
import TableHeadCell from "./TableHeadCell";
import {React} from "react-rapid-app";
import {BootstrapUIState, DynamicTableHeadColumn, DynamicTableHeadProps, DynamicTableHeadSpec} from "react-boot-spec";

interface Props extends DynamicTableHeadProps {

}

class State implements BootstrapUIState {

}

export default class DynamicTableHead extends DynamicTableHeadSpec<Props, State> {

    static defaultProps = {}

    state: State = new State();

    constructor(props: Props) {
        super(props);
    }


    render() {
        const _props = this.props;
        const {columns} = _props
        return (
            <TableHead color={_props.color}>
                <TableRow>
                    {columns.map(
                        (column: DynamicTableHeadColumn, key: any) => {
                            if (!column.isIgnoreHeader) {
                                return (
                                    <TableHeadCell
                                        style={column.isActionColumn ? {width: "100px", textAlign: "center"} : {}}
                                        currentSortFieldName={_props.currentSortFieldName}
                                        key={key}
                                        onClickSort={_props.onClickSort}
                                        id={column.id}
                                        className={column.className}
                                        isSortAble={column.isSortAble}
                                        fieldName={column.fieldName}>
                                        {column.displayName}
                                    </TableHeadCell>
                                )
                            }
                        })
                    }
                </TableRow>
            </TableHead>
        );
    }

}