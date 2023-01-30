import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

import plus from '../../icons/plus.svg';
import minus from '../../icons/minus.svg';
export const MaterialUISwitch = styled(Switch)(({ theme }) => {
  return {
    width: 86,
    height: 44,
    padding: 8,
    '& .MuiSwitch-switchBase': {
      margin: 0,
      padding: 0,
      transform: 'translateX(0px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(40px)',
        '& .MuiSwitch-thumb': {
          backgroundColor:
            theme.palette.mode === 'dark' ? '#ff6596' : '#ff6596',
          width: 44,
          height: 44,

          '&:before': {
            content: "''",
            color: '#000',
            fill: '#000',
            stroke: '#000',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundImage: `url(${plus})`,
          },
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          border: '1px solid #E0E0E0',
          backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#24cca7' : '#24cca7',
      width: 44,
      height: 44,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${minus})`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      border: '1px solid #E0E0E0',
      backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
      borderRadius: 25,
    },
  };
});
