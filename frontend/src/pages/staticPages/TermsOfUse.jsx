import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Navbar } from '../../features/navigation/components/Navbar';
import {Footer} from '../../features/footer/Footer';

const TermsOfUse = () => {
  return (
    <>
      <Navbar isProductList={true} />
      <Container maxWidth="md" sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Terms of Use
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our online bike store! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </Typography>

          <Typography variant="h6" gutterBottom>
            1. Use of the Website
          </Typography>
          <Typography variant="body1" paragraph>
            You agree to use this website only for lawful purposes. You must not use this site in any way that breaches any applicable local, national, or international law or regulation.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph>
            All content on this site, including text, graphics, logos, images, and software, is the property of our bike store and is protected by copyright laws. You may not reproduce, distribute, or create derivative works from any of the content without our express written consent.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Product Information
          </Typography>
          <Typography variant="body1" paragraph>
            We strive to ensure that all product information is accurate and up-to-date. However, we do not warrant that product descriptions or other content are free from errors. If a product offered by us is not as described, your sole remedy is to return it in unused condition.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Pricing and Payment
          </Typography>
          <Typography variant="body1" paragraph>
            All prices are subject to change without notice. We reserve the right to correct any pricing errors. Payment must be made in full before the dispatch of any goods.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            To the fullest extent permitted by law, we disclaim all warranties, express or implied, regarding the website and your use of it. We will not be liable for any damages arising from the use or inability to use this site.
          </Typography>

          <Typography variant="h6" gutterBottom>
            6. Changes to These Terms
          </Typography>
          <Typography variant="body1" paragraph>
            We may update these Terms of Use from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of the site after any such changes constitutes your acceptance of the new Terms.
          </Typography>

          <Typography variant="h6" gutterBottom>
            7. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about these Terms of Use, please contact us at [your email address].
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default TermsOfUse;
