import React from 'react';
import {Box, Breadcrumbs, Link, Typography} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


interface MyProps {

}

interface MyState {

}

class BreadcrumbsComp extends React.Component<MyProps, MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state = {}
    }


    render() {

        return (
            <Box m={2}>
                {/*apita Breadcrumbs ekata me separator='-' use karann puluwan separator='/'*/}
                <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small'/>}
                >
                    <Link href="#" underline='hover'>home</Link>
                    <Link href="#" underline='hover'>catalog</Link>
                    <Link href="#" underline='hover'>accessories</Link>
                    <Link href="#" underline='hover'>shoes</Link>
                    <Typography color='text.primary'>shoes</Typography>
                </Breadcrumbs>



                <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small'/>}
                             maxItems={2}
                >
                    <Link href="#" underline='hover'>home</Link>
                    <Link href="#" underline='hover'>catalog</Link>
                    <Link href="#" underline='hover'>accessories</Link>
                    <Link href="#" underline='hover'>shoes</Link>
                    <Typography color='text.primary'>shoes</Typography>
                </Breadcrumbs>



                <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small'/>}
                             maxItems={2}
                             itemsAfterCollapse={2}
                >
                    <Link href="#" underline='hover'>home</Link>
                    <Link href="#" underline='hover'>catalog</Link>
                    <Link href="#" underline='hover'>accessories</Link>
                    <Link href="#" underline='hover'>shoes</Link>
                    <Typography color='text.primary'>shoes</Typography>
                </Breadcrumbs>

                <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small'/>}
                             maxItems={2}
                             itemsBeforeCollapse={2}
                >
                    <Link href="#" underline='hover'>home</Link>
                    <Link href="#" underline='hover'>catalog</Link>
                    <Link href="#" underline='hover'>accessories</Link>
                    <Link href="#" underline='hover'>shoes</Link>
                    <Typography color='text.primary'>shoes</Typography>
                </Breadcrumbs>

            </Box>
        );
    }
}

export default BreadcrumbsComp;