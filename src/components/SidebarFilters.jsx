import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const SidebarFilters = () => {
  const [source, setSource] = React.useState('all');

  return (
    <div style={{ marginBottom: '1rem' }}>
      <h4>Filter</h4>
      <FormControl fullWidth size="small" style={{ marginBottom: '0.5rem' }}>
        <InputLabel>Location</InputLabel>
        <Select value="all">
          <MenuItem value="all">All States</MenuItem>
          <MenuItem value="tamil-nadu">Tamil Nadu</MenuItem>
          <MenuItem value="odisha">Odisha</MenuItem>
          <MenuItem value="kerala">Kerala</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth size="small" style={{ marginBottom: '0.5rem' }}>
        <InputLabel>Source</InputLabel>
        <Select value={source} onChange={(e) => setSource(e.target.value)}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="crowd">Crowd</MenuItem>
          <MenuItem value="social">Social</MenuItem>
        </Select>
      </FormControl>

      <Button variant="outlined" size="small" onClick={() => alert("Filtered!")}>Apply</Button>
    </div>
  );
};

export default SidebarFilters;