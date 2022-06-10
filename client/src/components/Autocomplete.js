import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="flight-origin"
        freeSolo
        options={originCities.map((option) => option.city)}
        renderInput={(params) => <TextField {...params} label="Flight Origin" />}
      />
      <Autocomplete
        freeSolo
        id="flight-destination"
        options={destinationCities.map((option) => option.city)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Flight Destination"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

// Flight origin cities
const originCities = [
    {city: 'Albany (ALB)'},
    {city: 'Atlanta (ATL)'},
    {city: 'Baltimore (BWI)'},
    {city: 'Birmingham'},
    {city: 'Boise (BOI)'},
    {city: 'Buffalo (BUF)'},
    {city: 'Charleston (CHS)'},
    {city: 'Chicago (CHI)'},
    {city: 'Dallas/Ft. Worth (DFW)'},
    {city: 'Detroit (DTT)'},
    {city: 'Flint (FNT)'},
    {city: 'Gulfport (GPT)'},
    {city: 'Hapmton (PHF)'},
    {city: 'Houston (HOU)'},
    {city: 'Indianapolis (IND)'},
    {city: 'Jacksonville (JAX)'},
    {city: 'Kansas City (MCI)'},
    {city: 'Las Vegas (LAS)'},
    {city: 'Lexington (LEX)'},
    {city: 'Memphis (MEM)'},
    {city: 'New Haven (HVN)'},
    {city: 'Omaha (OMA)'},
    {city: 'Philadelphia (PHL)'},
    {city: 'Raleigh/Durham (RDU)'},
    {city: 'Saint Louis (STL)'},
    {city: 'Tallahassee (TLH)'},
    {city: 'Washington DC Dulles (IAD)'},
    {city: 'Yuma (YUM)'},
]

const destinationCities = [
    {city: 'Atlanta'},
    {city: 'Atlanta (ATL)'},
    {city: 'Baltimore (BWI)'},
    {city: 'Birmingham'},
    {city: 'Boise (BOI)'},
    {city: 'Buffalo (BUF)'},
    {city: 'Charleston (CHS)'},
    {city: 'Chicago (CHI)'},
    {city: 'Dallas/Ft. Worth (DFW)'},
    {city: 'Detroit (DTT)'},
    {city: 'Flint (FNT)'},
    {city: 'Gulfport (GPT)'},
    {city: 'Hapmton (PHF)'},
    {city: 'Houston (HOU)'},
    {city: 'Indianapolis (IND)'},
    {city: 'Jacksonville (JAX)'},
    {city: 'Kansas City (MCI)'},
    {city: 'Las Vegas (LAS)'},
    {city: 'Lexington (LEX)'},
    {city: 'Memphis (MEM)'},
    {city: 'New Haven (HVN)'},
    {city: 'Omaha (OMA)'},
    {city: 'Philadelphia (PHL)'},
    {city: 'Raleigh/Durham (RDU)'},
    {city: 'Saint Louis (STL)'},
    {city: 'Tallahassee (TLH)'},
    {city: 'Washington DC Dulles (IAD)'},
    {city: 'Yuma (YUM)'},
]