import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

interface MyProps {

}
interface MyState {
    tableData:any[]
}
class TableComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
         tableData:[
             {
             "id": 1,
             "first_name": "Jess",
             "last_name": "Kiffin",
             "email": "jkiffin0@sogou.com",
             "gender": "Female",
             "ip_address": "103.112.231.26"
         }, {
             "id": 2,
             "first_name": "Adamo",
             "last_name": "Wigin",
             "email": "awigin1@infoseek.co.jp",
             "gender": "Male",
             "ip_address": "161.156.27.3"
         }, {
             "id": 3,
             "first_name": "Claudie",
             "last_name": "Beasley",
             "email": "cbeasley2@quantcast.com",
             "gender": "Female",
             "ip_address": "113.88.136.195"
         }, {
             "id": 4,
             "first_name": "Corena",
             "last_name": "Yeoland",
             "email": "cyeoland3@dell.com",
             "gender": "Female",
             "ip_address": "57.128.6.162"
         }, {
             "id": 5,
             "first_name": "Joelynn",
             "last_name": "Carlett",
             "email": "jcarlett4@whitehouse.gov",
             "gender": "Female",
             "ip_address": "171.37.202.192"
         }, {
             "id": 6,
             "first_name": "Valry",
             "last_name": "Wainscoat",
             "email": "vwainscoat5@guardian.co.uk",
             "gender": "Female",
             "ip_address": "124.235.135.5"
         }, {
             "id": 7,
             "first_name": "Felizio",
             "last_name": "Durnian",
             "email": "fdurnian6@loc.gov",
             "gender": "Male",
             "ip_address": "136.144.122.51"
         }, {
             "id": 8,
             "first_name": "Hyacinthe",
             "last_name": "Randlesome",
             "email": "hrandlesome7@ucoz.com",
             "gender": "Female",
             "ip_address": "105.102.206.99"
         }, {
             "id": 9,
             "first_name": "Parker",
             "last_name": "Creaney",
             "email": "pcreaney8@yale.edu",
             "gender": "Bigender",
             "ip_address": "213.255.137.138"
         }, {
             "id": 10,
             "first_name": "Adham",
             "last_name": "Mort",
             "email": "amort9@pinterest.com",
             "gender": "Male",
             "ip_address": "205.100.88.48"
         }]
        }
    }

    render() {
        return (
            <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
                <Table aria-label='simple-table' stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>first name</TableCell>
                            <TableCell>last name</TableCell>
                            <TableCell align='center'>email</TableCell>
                            <TableCell>gender</TableCell>
                            <TableCell>ip address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.tableData.map((customer)=>{
                                return(
                                    <TableRow key={customer.id} sx={{'&:last-child td, &:last-child th': { border: 0 }}}>
                                       <TableCell>{customer.id}</TableCell>
                                       <TableCell>{customer.first_name}</TableCell>
                                       <TableCell>{customer.last_name}</TableCell>
                                       <TableCell align='center'>{customer.email}</TableCell>
                                       <TableCell>{customer.gender}</TableCell>
                                       <TableCell>{customer.ip_address}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default TableComp;