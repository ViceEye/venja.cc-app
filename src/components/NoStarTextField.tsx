import styled from "@emotion/styled"
import { TextFieldProps, TextField } from "@mui/material"

interface NoStarTextFieldProps {
  id?: string
  props?: TextFieldProps
}

const NoStarTextField: React.FC<NoStarTextFieldProps> = ({ id, props }) => {
  const NoStarTextField = styled(TextField)(() => ({
    "& .MuiInputLabel-asterisk": {
      display: "none",
    },
  }))

  return <NoStarTextField margin='normal' required fullWidth id={id} name={id} {...props} />
}

export default NoStarTextField
