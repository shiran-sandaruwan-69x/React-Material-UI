import React from 'react';
import {Typography} from "@mui/material";

interface MyProps {
}

interface MyState {
}

class TypographyComp extends React.Component<MyProps, MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Typography variant="h1">H1 heading</Typography>
                <Typography variant="h2">H2 heading</Typography>
                <Typography variant="h3">H3 heading</Typography>
                {/*component tag eken h4 eke type h1 walata change wena eka wenne*/}
                <Typography variant="h4" component="h1">H4 heading</Typography>
                {/*gutterBottom amathara space ekak ekk puluwan magin-bottom eken*/}
                <Typography variant="h5" gutterBottom>H5 heading</Typography>
                <Typography variant="h6">H6 heading</Typography>

                <Typography variant="subtitle1">H6 heading</Typography>
                <Typography variant="subtitle1">H6 heading</Typography>

                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, assumenda
                    distinctio eius excepturi harum ipsam, iure laudantium magni natus nulla odit officiis pariatur
                    praesentium quaerat quas qui reprehenderit tenetur totam.</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum
                    id magnam natus reiciendis! Animi architecto assumenda beatae deserunt doloribus exercitationem
                    incidunt ipsum laboriosam magnam, natus nisi provident, quo voluptate.</Typography>
            </div>
        );
    }
}

export default TypographyComp;