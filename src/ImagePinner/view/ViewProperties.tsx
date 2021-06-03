/* eslint-disable max-lines-per-function */
/* eslint-disable react/display-name */
/* eslint-disable */
import React, { forwardRef, useEffect } from 'react';
import MaterialTable, { Column, Icons } from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { TextField, Box } from '@material-ui/core';
import { IPin } from '../store/IState';
import { useDispatch, useSelector } from '../store/Provider';
import { actionAddPin, actionEditPin, actionRemovePin } from '../action/ActionComponent';
import { createPinDrag, updateOrderPinDrag } from '../helpers/utils';
import { InputProperties } from '../properties/IProperties';
import './style/style.css';

const DescriptionProperty = (props: any) => {
    return (
        <TextField
            placeholder="Description"
            type="text"
            value={props.value}
            InputLabelProps={{
                shrink: true
            }}
            onChange={e => props.onChange(e.target.value)}
        />
    );
};

const OrderProperty = (props: any) => {
    return (
        <TextField
            placeholder="Order"
            type="number"
            value={props.order}
            InputProps={{ inputProps: { min: 0 } }}
            InputLabelProps={{
                shrink: true
            }}
            onChange={e => props.onChange(e.target.value)}
        />
    );
};

const tableIcons: Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export const Properties: React.FC<InputProperties> = ({ svgRef }) => {
    const dispatch = useDispatch();
    const pins = useSelector<IPin[]>(({ pins }) => (pins ? pins : []));

    const columnsSet: Column<IPin>[] = [
        {
            title: 'Description',
            field: 'description',
            editComponent: DescriptionProperty,
        },
        {
            title: 'Order',
            field: 'order',
            type: 'numeric',
            editComponent: OrderProperty
        }
    ];

    const add = (newData: IPin) =>
        new Promise<void>((resolve, reject) => {
            const newpin = createPinDrag(svgRef, pins, newData);
            dispatch(actionAddPin(newpin, pins));
            resolve();
            return;
        });

    const update = (newData: IPin, _oldData?: IPin) =>
        new Promise<void>((resolve, reject) => {
            updateOrderPinDrag(newData, pins);
            dispatch(actionEditPin(newData, _oldData, pins));
            resolve();
            return;

        });

    const remove = (oldData: IPin) =>
        new Promise<void>((resolve, reject) => {
            oldData.selection.remove();
            dispatch(actionRemovePin(oldData, pins));
            resolve();
            return;
        });

    return (
        <Box className={`table-imagepinner`}>
            <MaterialTable
                key={`ImagePinner`}
                title={`Editable Pinner`}
                icons={tableIcons}
                columns={columnsSet}
                data={pins ? pins : []}
                options={{ pageSizeOptions: [5] }}
                editable={{
                    onRowAdd: newData => add(newData),
                    onRowUpdate: (newData, oldData) => update(newData, oldData),
                    onRowDelete: oldData => remove(oldData)
                }}
            />
        </Box>
    );
}
