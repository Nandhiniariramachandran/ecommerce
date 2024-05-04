import './App.css'; 
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography, List, ListItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import red from './red.jpg';
import dress6 from './images/dress6.jpg';
import meroon from './meroon.jpg';
import purple from './purple.jpg';
import green from './green.jpg';
import gown from './gown.jpg';
import blue from './blue.jpg';
import sky from './sky.jpg';
import white from './white.jpg';
import round from './round.jpg';
import light from './light.jpg';
import combo from './combo.jpg';
import Button from '@mui/material/Button';
import accounticon from './accounticon.png';
import cartlogo from './cartlogo.png';
import React,{ useState } from 'react';


const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));







const ShoppingPage = () => {
  
  const[count,setCount] = useState(0);
  const handleCartcount = () => {

    setCount(count+1)
 }

  return (
    <header>
      <Box style={{ width: '1290px' }} sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1, }}>

             
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            <img src={accounticon} alt="accounticon.png"  style={{ width: '2.5%', height: '2%'}} />

              
            </Typography>
<label className='cartLabel' style={{top:'-89px'}}>{count}</label>
            <img src={cartlogo} alt="cartlogo.png"  style={{ width: '2.6%', height: '2%',}}/>
          
           
            <Button color="inherit">Cart</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <img src={red} alt="red.jpg" style={{ width: '100%', height: '200px' }} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem divider>
                <Button className="btnColor" variant="contained" onClick={handleCartcount}>ADD TO CART</Button>
              </ListItem>
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained" >BUY</Button>
              </ListItem>
              <Divider />
            </List>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <img src={white} alt="red.jpg" style={{ width: '100%', height: '200px' }} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained"  onClick={handleCartcount}>ADD TO CART </Button>
              </ListItem>
              <Divider  />
              <ListItem  divider>
                <Button className="btnColor" variant="contained">BUY</Button>
              </ListItem>
              <Divider  />
            </List>
          </Item>
        </Grid>


        <Grid item xs={4}>
          <Item>
            <img src={green} alt="red.jpg" style={{ width: '100%', height: '200px' }} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained"  onClick={handleCartcount}>ADD TO CART</Button>
              </ListItem>
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained">BUY</Button>
              </ListItem>
              <Divider />
            </List>
          </Item>
        </Grid>


        <Grid item xs={4}>
          <Item>
            <img src={dress6} alt="red.jpg" style={{ width: '100%', height: '200px' }} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem divider>
                <Button className="btnColor" variant="contained"  onClick={handleCartcount}>ADD TO CART</Button>
              </ListItem>
              <Divider  />
              <ListItem  divider>
                <Button className="btnColor" variant="contained">BUY</Button>
              </ListItem>
              <Divider  />
            </List>
          </Item>
        </Grid>


        <Grid item xs={4}>
          <Item>
            <img src={purple} alt="red.jpg" style={{ width: '100%', height: '200px' }} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained"  onClick={handleCartcount}>ADD TO CART</Button>
              </ListItem>
              <Divider  />
              <ListItem  divider>
                <Button className="btnColor" variant="contained">BUY</Button>
              </ListItem>
              <Divider  />
            </List>
          </Item>
        </Grid>


        <Grid item xs={4}>
          <Item>
            <img src={meroon} alt="red.jpg" style={{ width: '100%', height: '200px' }} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem divider>
                <Button className="btnColor" variant="contained"  onClick={handleCartcount}>ADD TO CART</Button>
              </ListItem>
              <Divider  />
              <ListItem  divider>
                <Button className="btnColor" variant="contained">BUY</Button>
              </ListItem>
              <Divider />
            </List>
          </Item>
        </Grid>


        <Grid item xs={4}>
          <Item>
            <img src={sky} alt="red.jpg" style={{ width: '100%', height: '200px'}} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained"  onClick={handleCartcount}>ADD TO CART</Button>
              </ListItem>
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained">BUY</Button>
              </ListItem>
              <Divider  />
            </List>
          </Item>
        </Grid>

       

        <Grid item xs={4}>
          <Item>
            <img src={light} alt="red.jpg" style={{ width: '100%', height: '200px' }} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained" onClick={handleCartcount}>ADD TO CART</Button>
              </ListItem>
              <Divider  />
              <ListItem  divider>
                <Button className="btnColor" variant="contained">BUY</Button>
              </ListItem>
              <Divider  />
            </List>
          </Item>
        </Grid>

       
        <Grid item xs={4}>
          <Item>
            <img src={round} alt="red.jpg" style={{ width: '100%', height: '200px' }} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained"  onClick={handleCartcount}>ADD TO CART</Button>
              </ListItem>
              <Divider  />
              <ListItem divider>
                <Button className="btnColor" variant="contained">BUY</Button>
              </ListItem>
              <Divider  />
            </List>
          </Item>
        </Grid>

       
        <Grid item xs={4}>
          <Item>
            <img src={gown} alt="red.jpg" style={{ width: '100%', height: '200px' }} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained"  onClick={handleCartcount}>ADD TO CART</Button>
              </ListItem>
              <Divider  />
              <ListItem divider>
                <Button className="btnColor" variant="contained">BUY</Button>
              </ListItem>
              <Divider  />
            </List>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <img src={blue} alt="red.jpg" style={{ width: '100%', height: '200px' }} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained"  onClick={handleCartcount}>ADD TO CART</Button>
              </ListItem>
              <Divider  />
              <ListItem  divider>
                <Button className="btnColor" variant="contained">BUY</Button>
              </ListItem>
              <Divider  />
            </List>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <img src={combo} alt="red.jpg" style={{ width: '100%', height: '200px' }} />
            <List sx={style} component="nav" aria-label="mailbox folders">
              <Divider />
              <ListItem  divider>
                <Button className="btnColor" variant="contained"  onClick={handleCartcount}>ADD TO CART</Button>
              </ListItem>
              <Divider  />
              <ListItem divider>
                <Button className="btnColor" variant="contained">BUY</Button>
              </ListItem>
              <Divider  />
            </List>
          </Item>
        </Grid>
       
       
       
      </Grid>
    </header>
  );
};

export default ShoppingPage;