import React from 'react';
import {AppBar, Button, IconButton, Link, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";



interface MyProps {

}

interface MyState {

}

class Links extends React.Component<MyProps, MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state = {

        }
    }



    render() {

        return (
          <Stack spacing={2} direction='row' m={4}>
              <Link href='#'>You Tube</Link>
              <Link href='#' color='secondary'>You Tube 2</Link>
              <Link href='#' color='greenyellow' underline='hover'>You Tube 3</Link>

              <Typography variant='h6'>
                  <Link href='#' color='green' underline='none'>You Tube 4</Link>
              </Typography>

          </Stack>
        );
    }
}

export default Links;