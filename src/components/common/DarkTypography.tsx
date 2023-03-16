import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const DarkTypography = styled(Typography)({
  color: 'black',
  '&:hover': {
  }
}) as typeof Typography;

export default DarkTypography;