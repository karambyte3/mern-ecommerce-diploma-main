import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Stack, Snackbar, Alert } from '@mui/material';
import { Navbar } from '../../features/navigation/components/Navbar';
import { Footer } from '../../features/footer/Footer';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form fields
        setOpenSnackbar(true); // Show success message
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <>
            <Navbar isProductList={true} />
            <Container maxWidth="md" sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Box>
                    <Box sx={{ marginBottom: '3rem' }}>
                        <Typography variant="h6" gutterBottom>
                            Our Contact Information
                        </Typography>
                        <Typography variant="body1">
                            <strong>Address:</strong> 123 Bike Lane, Cycle City, BIK 4567
                        </Typography>
                        <Typography variant="body1">
                            <strong>Email:</strong> support@bikeable.com
                        </Typography>
                        <Typography variant="body1">
                            <strong>Phone:</strong> +1 (234) 567-8901
                        </Typography>
                        <Typography variant="body1">
                            <strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM
                        </Typography>
                    </Box>
                    <Typography variant="h4" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Have questions, comments, or concerns? We're here to help! Fill out the form below or reach out to us using the contact details provided.
                    </Typography>

                    <Box component="form" sx={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <TextField
                                fullWidth
                                label="Your Name"
                                variant="outlined"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Your Email"
                                variant="outlined"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Subject"
                                variant="outlined"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <Button type="submit" variant="contained" color="primary" size="large">
                                Send Message
                            </Button>
                        </Stack>
                    </Box>

                    <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                            Your message has been sent successfully!
                        </Alert>
                    </Snackbar>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default ContactUs;