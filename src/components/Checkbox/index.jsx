import { styled } from "@mui/material/styles";
import MaterialCheckbox from "@mui/material/Checkbox";

const CustomCheckbox = styled(MaterialCheckbox)(({ theme }) => ({
  color: theme.primary.main,
  "&.Mui-checked": {
    color: theme.primary.main,
  },
}));

const Checkbox = () => {
  return <CustomCheckbox defaultChecked />;
};

export default Checkbox;
