import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const DarkCustomButton = styled(Button)({
  borderRadius: 50,
  color: 'black',
  borderColor: 'black',
  padding: '0.5% 2%',
  '&:hover': {
    borderColor: 'whitesmoke',
    backgroundColor: 'black',
    color: 'whitesmoke',
  }
}) as typeof Button;

export default DarkCustomButton;