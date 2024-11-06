import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { blue, green, orange } from '@mui/material/colors';

const DashboardCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  minHeight: '100px',
  backgroundColor: theme.palette.grey[200],
  borderRadius: '10px',
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

const CardValue = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

const MainPage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {/* First Row: 3 Dashboard Cards */}
        <Grid item xs={12} sm={4}>
          <DashboardCard>
            <CardContent>
              <CardTitle>Total Users</CardTitle>
              <CardValue>1,250</CardValue>
            </CardContent>
            <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
              View Details
            </Button>
          </DashboardCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardCard>
            <CardContent>
              <CardTitle>Active Sessions</CardTitle>
              <CardValue>850</CardValue>
            </CardContent>
            <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
              View Details
            </Button>
          </DashboardCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardCard>
            <CardContent>
              <CardTitle>Orders Today</CardTitle>
              <CardValue>320</CardValue>
            </CardContent>
            <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
              View Details
            </Button>
          </DashboardCard>
        </Grid>

        {/* Second Row: Graph or Stats Section */}
        <Grid item xs={12}>
          <Card sx={{ padding: 3, backgroundColor: blue[50], borderRadius: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Recent Activity Graph
            </Typography>
            {/* Grafik burada olacak */}
            {/* Örneğin, Chart.js veya Recharts kullanılabilir */}
          </Card>
        </Grid>

        {/* Third Row: Quick Actions */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ padding: 2, backgroundColor: green[50], borderRadius: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Quick Actions
            </Typography>
            <Button fullWidth variant="contained" color="success" sx={{ marginBottom: 2 }}>
              Add New Product
            </Button>
            <Button fullWidth variant="contained" color="success" sx={{ marginBottom: 2 }}>
              Create New Post
            </Button>
            <Button fullWidth variant="contained" color="success" sx={{ marginBottom: 2 }}>
              Manage Users
            </Button>
          </Card>
        </Grid>

        {/* Fourth Row: System Status */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ padding: 2, backgroundColor: orange[50], borderRadius: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              System Status
            </Typography>
            <Typography sx={{ marginBottom: 1 }}>
              <strong>Server:</strong> Running smoothly
            </Typography>
            <Typography sx={{ marginBottom: 1 }}>
              <strong>Database:</strong> Operational
            </Typography>
            <Typography>
              <strong>API:</strong> Stable
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
