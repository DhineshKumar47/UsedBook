import React, { useState } from 'react'
import { Card, CardContent, Grid, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';

const TempBook = (props) => {
    const titleStyle = {
        fontSize: '20px'
    }
    const [open, setOpen] = useState(false)
    const { BookContent } = props
    console.log(BookContent, '333');
    return (
        <Grid container spacing={5} style={{ padding: '100px 70px', display: 'flex', justifyContent: 'center' }}>

            {BookContent.map((d, i) =>

                <Grid item style={{ padding: '10px', display: 'flex', flexWrap: 'wrap' }} lg={3} md={3} sm={6} xs={12} >
                    <Card sx={{ minHeight: '350px', minWidth: '200px' }} elevation={10} >
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
                                <img style={{ width: '150px' }} src={d.image} alt="" /></div>
                            <div style={{ fontSize: 14, display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>{'Title :'}{d.title}</div>
                            <div style={{ fontSize: 14, display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>{'Author :'}{d.author}</div>
                            <Grid style={{ display: 'flex', justifyContent: 'center' }}>
                                <Grid>
                                    <Button variant="contained" startIcon={<ShoppingCartIcon />} onClick={setOpen}>
                                        Add to Cart
                                    </Button>
                                </Grid>
                                <Grid>
                                    <button color={red}> <FavoriteBorderIcon /></button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                </Grid>


            )}



        </Grid>
    )
}

export default TempBook