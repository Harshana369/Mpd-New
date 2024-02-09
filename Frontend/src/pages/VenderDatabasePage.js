import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import VenderDatabaseTableFormatEdit from './VenderDatabaseTableFormatEdit';
import Page from '../components/Page';

function VenderDatabasePage() {
  return (
    <Page title="Settings - Select Menu Options | Projects Management Database">
      <Container>
        <Typography variant="h6" gutterBottom>
          Vender Database Table Edit
        </Typography>

        <Stack />

        <VenderDatabaseTableFormatEdit />
      </Container>
    </Page>
  );
}

export default VenderDatabasePage;
