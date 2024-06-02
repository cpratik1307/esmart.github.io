import {Grid, Button, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>

            <Typography style={{margin:30}} variant="h2">
            React Barcode
            </Typography>

            <Grid container spacing={6}>
            <Grid item xs={6}>
    <Link to="/barcode_scanner">
        <Button variant="contained" size="large" color="secondary">
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style={{ padding: 30 }} fill="currentColor" class="bi bi-barcode">
                <path d="M12 0H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM4 14H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2v8a2 2 0 0 1-2 2zm0-10H2a2 2 0 0 0-2 2v2h2V4zm10 0h-2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM2 10V8h2v2H2zm10 0h-2v2h2a2 2 0 0 0 2-2v-2h-2v2zm-6 0h2v2H6v-2zm6-6h2v2h-2V4zm0 6h2v2h-2v-2zm6-6h-2v2h2V4zm0 6h-2v2h2v-2z" />
                <path d="M8 12h4v2H8v-2z" />
            </svg>
        </Button>
    </Link>
</Grid>
            <Grid item xs={6}>
  <Link to="/QrcodeScanner">
    <Button variant="contained" size="large" color="secondary">
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" style={{ padding: 30 }} fill="currentColor" class="bi bi-qrcode">
        <path d="M12 0H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM4 14H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2v8a2 2 0 0 1-2 2zm0-10H2a2 2 0 0 0-2 2v2h2V4zm10 0h-2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM2 10V8h2v2H2zm10 0h-2v2h2a2 2 0 0 0 2-2v-2h-2v2zm-6 0h2v2H6v-2zm6-6h2v2h-2V4zm0 6h2v2h-2v-2zm6-6h-2v2h2V4zm0 6h-2v2h2v-2z" />
      </svg>
    </Button>
  </Link>
</Grid>
            </Grid>
        
        </div>
    );
  }
  
  export default Home;
  