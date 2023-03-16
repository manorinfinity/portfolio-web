import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  borderRadius: 50,
  color: 'whitesmoke',
  borderColor: 'whitesmoke',
  padding: '0.5% 2%',
  '&:hover': {
    borderColor: 'black',
    backgroundColor: 'whitesmoke',
    color: 'black',
  }
}) as typeof Button;

export default CustomButton;