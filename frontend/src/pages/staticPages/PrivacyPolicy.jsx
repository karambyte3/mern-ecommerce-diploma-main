import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Navbar } from '../../features/navigation/components/Navbar';
import {Footer} from '../../features/footer/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar isProductList={true} />
      <Container maxWidth="md" sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our Privacy Policy page! When you use our website, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important; we hope you will take time to read it carefully.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We collect information to provide better services to all our users. This includes:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Personal Information: Name, email address, phone number, etc.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Payment Information: Billing address, credit/debit card details.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Usage Data: Pages visited, time spent on the site, etc.
              </Typography>
            </li>
          </ul>

          <Typography variant="h6" gutterBottom>
            How We Use Information
          </Typography>
          <Typography variant="body1" paragraph>
            The information we collect is used to:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Provide, maintain, and improve our services.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Process transactions and send related information.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Communicate with you about products, services, and offers.
              </Typography>
            </li>
          </ul>

          <Typography variant="h6" gutterBottom>
            Information Sharing
          </Typography>
          <Typography variant="body1" paragraph>
            We do not share personal information with companies, organizations, or individuals outside of our company except in the following cases:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                With your consent.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                For external processing by trusted partners.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                For legal reasons if required by law.
              </Typography>
            </li>
          </ul>

          <Typography variant="h6" gutterBottom>
            Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at [your email address].
          </Typography>

          <Typography variant="h6" gutterBottom>
            Changes to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about this Privacy Policy, please contact us at [your email address].
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
