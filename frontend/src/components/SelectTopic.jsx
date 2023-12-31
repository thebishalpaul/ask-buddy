import topics from "../json/topics.json"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function SelectTopic() {

  const options = topics.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <>
      <Autocomplete
        id="grouped-demo"
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        aria-required
        renderInput={(params) => <TextField {...params} label="Select Topic" />}
        renderGroup={(params) => (
          <li key={params.key}>
            <h4>{params.group}</h4>
            <p>{params.children}</p>
          </li>
        )}
      />
    </>
  );
}
