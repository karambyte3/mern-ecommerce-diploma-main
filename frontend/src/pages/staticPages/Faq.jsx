import React from 'react';
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Navbar } from '../../features/navigation/components/Navbar';
import {Footer} from '../../features/footer/Footer';

const FAQ = () => {
  return (
    <>
      <Navbar isProductList={true} />
      <Container maxWidth="md" sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Frequently Asked Questions (FAQ)
          </Typography>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">What types of bikes do you sell?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We offer a wide range of bikes including mountain bikes, road bikes, hybrid bikes, electric bikes, and kids' bikes. Whether you're a professional cyclist or a casual rider, we have something for everyone.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Do you offer bike repairs and maintenance?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, we provide comprehensive bike repair and maintenance services. Our skilled technicians can handle everything from simple tune-ups to complex repairs.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">What is your return policy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We offer a 30-day return policy on all bikes and accessories. Items must be returned in their original condition with all packaging and receipts. Custom orders are non-refundable.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Do you offer financing options?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, we offer financing options through several third-party providers. You can choose a payment plan that fits your budget during the checkout process.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">How can I track my order?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Once your order has been shipped, you will receive an email with a tracking number. You can use this number to track your order on our website or through the courier's tracking system.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Do you ship internationally?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Currently, we ship only within the country. However, we are working on expanding our shipping options to include international destinations in the near future.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">How can I contact customer support?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can contact our customer support team via email at [your email address] or call us at [your phone number]. Our support team is available Monday to Friday from 9 AM to 6 PM.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default FAQ;
