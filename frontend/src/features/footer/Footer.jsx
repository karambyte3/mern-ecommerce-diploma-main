import { Box, IconButton, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'
import { QRCodePng, appStorePng, googlePlayPng ,facebookPng,instagramPng,twitterPng,linkedinPng} from '../../assets'
import SendIcon from '@mui/icons-material/Send';
import { MotionConfig, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate=useNavigate();

    const theme=useTheme()
    const is700=useMediaQuery(theme.breakpoints.down(700))

    const labelStyles={
        fontWeight:300,
        cursor:'pointer'
    }

    const linksStyle = {
        color: '#fff'
    }

  return (
    <Stack sx={{backgroundColor:theme.palette.primary.main,paddingTop:"3rem",paddingLeft:is700?"1rem":"3rem",paddingRight:is700?"1rem":"3rem",paddingBottom:"1.5rem",rowGap:"5rem",color:theme.palette.primary.light,justifyContent:"space-around"}}>

            {/* upper */}
            <Stack flexDirection={'row'} rowGap={'1rem'} justifyContent={is700?"":'space-around'} flexWrap={'wrap'}>

                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography variant='h6' fontSize={'1.5rem'}>Exclusive</Typography>
                    <Typography variant='h6'>Subscribe</Typography>
                    <Typography sx={labelStyles}>Get 10% off your first order</Typography>
                    <TextField placeholder='Enter your email' sx={{border:'1px solid white',borderRadius:"6px"}} InputProps={{endAdornment:<IconButton><SendIcon sx={{color:theme.palette.primary.light}}/></IconButton>,style:{color:"whitesmoke"}}}/>
                </Stack>

                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography variant='h6'>Support</Typography>
                    <Typography sx={labelStyles}>123 Bike Lane, Cycle City, BIK 4567</Typography>
                    <Typography sx={labelStyles}>support@bikeable.com</Typography>
                    <Typography sx={labelStyles}>+1 (234) 567-8901</Typography>
                    <Typography sx={labelStyles}>Monday - Friday, 9 AM - 6 PM</Typography>
                </Stack>

                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography  variant='h6'>Account</Typography>
                    <Link to="/profile" style={linksStyle}>Profile</Link>
                    <Link to="/wishlist" style={linksStyle}>Wishlist</Link>
                    <Link to="/" style={linksStyle}>Shop</Link>
                    <Link to="/cart" style={linksStyle}>Cart</Link>
                </Stack>

                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography  variant='h6'>Quick Links</Typography>
                    <Link to="/privacy-policy" style={linksStyle}>Privacy Policy</Link>
                    <Link to="/terms-of-use" style={linksStyle}>Terms Of Use</Link>
                    <Link to="/faq" style={linksStyle}>Frequently Asked Questions</Link>
                    <Link to="/contact-us" style={linksStyle}>Contact Us</Link>
                </Stack>

                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography  variant='h6'>Download App</Typography>
                    <Typography sx={{...labelStyles,color:"graytext",fontWeight:500}}>Save $3 with App New User Only</Typography>
                    <Stack flexDirection={'row'} columnGap={'.5rem'}>

                        <Box width={'100px'} height={"100px"}>
                            <img src={QRCodePng} height={'100%'} width={'100%'} style={{objectFit:'contain'}} alt="QR Code"/>
                        </Box>

                        <Stack justifyContent={'space-around'}>
                            <Stack>
                                <img style={{width:"100%",height:"100%",cursor:"pointer"}} src={googlePlayPng} alt="GooglePlay" />
                            </Stack>
                            <Stack>
                                <img style={{width:"100%",height:'100%',cursor:"pointer"}} src={appStorePng} alt="AppStore" />
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack mt={.6} flexDirection={'row'} columnGap={'2rem'}>
                        <MotionConfig whileHover={{scale:1.1}} whileTap={{scale:1}}>
                            <motion.img style={{cursor:"pointer"}} src={facebookPng} alt="Facebook" />
                            <motion.img style={{cursor:"pointer"}} src={twitterPng} alt="Twitter" />
                            <motion.img style={{cursor:"pointer"}} src={instagramPng} alt="Instagram" />
                            <motion.img style={{cursor:"pointer"}} src={linkedinPng} alt="Linkedin" />
                        </MotionConfig>
                    </Stack>
                </Stack>

            </Stack>

            {/* lower */}
            <Stack alignSelf={"center"}>
                <Typography color={'GrayText'}>&copy; Mern Store {new Date().getFullYear()}. All right reserved</Typography>
            </Stack>

    </Stack>
  )
}
