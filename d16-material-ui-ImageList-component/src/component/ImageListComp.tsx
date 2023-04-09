import React from 'react';
import {Box, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Stack} from "@mui/material";


interface MyProps {

}

interface MyState {
    imageDATA: any[]
}

class ImageListComp extends React.Component<MyProps, MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state = {
            imageDATA: [
                {
                    img: 'https://m.timesofindia.com/photo/97800605/97800605.jpg',
                    title: 'girl1'
                },
                {
                    img: 'https://cdn2.sharechat.com/gcpstagingtestingtag_2cb5a380_1586949624399_cmprsd_40.jpg',
                    title: 'girl2'
                },
                {
                    img: 'https://cdn4.sharechat.com/hotgirl_453f2892-9a03-4d03-9bb8-557817e56c69-bc3ea578-553c-4f75-932a-72dd4c2e09b7_cmprsd_40.jpg',
                    title: 'girl3'
                },
                {
                    img: 'https://cdn2.sharechat.com/hotgirl_2f5a9347-f85b-4c34-8f9b-f1ef5bd70582-a34c9b53-8859-495f-8c63-a7b59359848f_cmprsd_40.jpg',
                    title: 'girl4'
                },
                {
                    img: 'https://cdn4.sharechat.com/sexygirl_1ebf4032_1591877075071_cmprsd_40.jpg',
                    title: 'girl5'
                },
                {
                    img: 'https://i.pinimg.com/736x/c8/6f/ef/c86fef73360ebb66801249be51604c52.jpg',
                    title: 'girl6'
                },
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1K2ysn6Rqt9F1Kl0EbgPu_6FZ3e48hHeBYjnkGtdm4bpyUzYb3PLxiJrHzDeeZKqBtes&usqp=CAU',
                    title: 'girl7'
                },
                {
                    img: 'https://i.pinimg.com/originals/f2/99/41/f299416dcfe381c64015ebd30e1e2eb5.png',
                    title: 'girl8'
                },
                {
                    img: 'https://w0.peakpx.com/wallpaper/359/324/HD-wallpaper-beauty-beautiful-blonde-blue-eyes-girl-gorgeous-portrait.jpg',
                    title: 'girl9'
                },
                {
                    img: 'https://www.pixelstalk.net/wp-content/uploads/images6/Wallpaper-For-Girl-Cute-Free-Download.jpg',
                    title: 'girl10'
                },
                {
                    img: 'https://loveshayariimages.in/wp-content/uploads/2022/11/beautiful-girl-pics.jpg',
                    title: 'girl11'
                },
                {
                    img: 'https://lzd-img-global.slatic.net/g/ff/kf/S184a0e71995e4d0ca96cf4124a87ecefH.jpg_720x720q80.jpg',
                    title: 'girl12'
                },
                {
                    img: 'https://cf.shopee.ph/file/e11458d98ab3ef961930a89d5ce1862b',
                    title: 'girl13'
                },
                {
                    img: 'https://cf.shopee.ph/file/34d15953cafe53e5248c482d6683cce3',
                    title: 'girl14'
                },
                {
                    img: 'https://my-live-01.slatic.net/p/b91cf6df3e468fde2a96f354e59a2804.jpg',
                    title: 'girl15'
                },
                {
                    img: 'https://ae01.alicdn.com/kf/Hfc4fa09f63164ec3be351d6949696a1bd/Hong-Kong-Style-French-Minority-Sexy-Hot-Girl-Tube-Top-Package-Hip-Elegant-Bodycon-Pure-Desire.jpg_Q90.jpg_.webp',
                    title: 'girl16'
                },

            ]
        }
    }


    render() {
        return (
            <Stack spacing={4}  direction='row'>
                <h3>image List 1</h3>
                <ImageList
                    sx={{width: 500, height: 450}}
                    rowHeight={164}
                    cols={3}
                >
                {/*<ImageListItem key='subheader' cols={3}> <ListSubheader component='div'>image List 1</ListSubheader></ImageListItem>*/}
                    {
                        this.state.imageDATA.map((img) => {
                            return (
                                <ImageListItem key={img.img}>
                                    <img
                                        src={`${img.img}?w164&h=164&fit=crop&auto=format&dpr=2`}
                                        alt={img.title}
                                        loading='lazy'/>
                                    <ImageListItemBar title={img.title}/>
                                </ImageListItem>
                            )
                        })
                    }


                </ImageList>


                <h4>image List 2</h4>

                <ImageList
                    sx={{width: 500, height: 450}}
                    cols={3}
                    variant='woven'
                    gap={8}
                >

                    {
                        this.state.imageDATA.map((img) => {
                            return (
                                <ImageListItem key={img.img}>
                                    <img
                                        src={`${img.img}?w164&h=164&fit=crop&auto=format&dpr=2`}
                                        alt={img.title}
                                        loading='lazy'/>
                                </ImageListItem>
                            )
                        })
                    }


                </ImageList>

                <h4>image List 3</h4>

                <Box sx={{width: 500, height: 450, overflowY:'scroll'}}>
                    <ImageList
                        cols={3}
                        gap={8}
                    >

                        {
                            this.state.imageDATA.map((img) => {
                                return (
                                    <ImageListItem key={img.img}>
                                        <img
                                            src={`${img.img}?w164&h=164&fit=crop&auto=format&dpr=2`}
                                            alt={img.title}
                                            loading='lazy'/>
                                    </ImageListItem>
                                )
                            })
                        }


                    </ImageList>
                </Box>

                <h4>image List 4</h4>

                <Box sx={{width: 500, height: 450, overflowY:'scroll'}}>
                    <ImageList
                        cols={3}
                        gap={8}
                        variant='masonry'
                    >

                        {
                            this.state.imageDATA.map((img) => {
                                return (
                                    <ImageListItem key={img.img}>
                                        <img
                                            src={`${img.img}?w248&fit=crop&auto=format&dpr=2`}
                                            alt={img.title}
                                            loading='lazy'/>
                                    </ImageListItem>
                                )
                            })
                        }


                    </ImageList>
                </Box>


            </Stack>
        );
    }
}

export default ImageListComp;