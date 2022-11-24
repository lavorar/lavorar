import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Inutil',
  1: 'Inutil+',
  1.5: 'Pobre',
  2: 'Pobre+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Bueno',
  4: 'Bueno+',
  4.5: 'Excelente',
  5: 'Excelente+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating({ readOnly, value, hover, onChangeActive, onChange, counts }) {
  const countsReview = counts ? '(' + counts + ')' : 0.5
  let valLabel = 0.5 * Math.floor(value / 0.5)
  console.log(counts)
  let label = (value + ' (' + counts + ' )' + labels[counts ? valLabel : (hover !== -1 ? hover : value)])
  if (!counts) {
    label = 'no hay reseñas'
  }
  if (counts === 0) {
    label = labels[(hover !== -1 ? hover : value)]
  }
  console.log(label)
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    > {readOnly !== true ?
      <Rating
        name="rating-onchange"
        value={value ? value : 5}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={onChange}
        onChangeActive={onChangeActive}
        emptyIcon={<StarIcon style={{ opacity: 1, color: '#13192B' }} fontSize="inherit"
        />}
      />
      :
      <Rating
        name="half-rating"
        defaultValue={value}
        precision={0.5}
        readOnly
        getLabelText={getLabelText}
        emptyIcon={<StarIcon style={{ opacity: 1, color: '#13192B' }} fontSize="inherit"
        />}
      />
      }
      {(
        <Box sx={{ ml: 2 }}>{label}</Box>
      )}
    </Box>
  );
}