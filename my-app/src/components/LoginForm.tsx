import {
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Input,
} from "@mui/material";
import React from "react";
// const useInput = ({initialValue}: any) => {
//   const [value, setValue] = useState(initialValue);
//   const [isDirty, setDirty] = useState(false);

// const onChange = (e: any) => {
//   setValue(e.target.value);
// };

// const onBlur = (e: any) => {
//   setDirty(true);
// };

//   return {
//     value,
//     onChange,
//     onBlur,
//   };
// };

const LoginForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const email = useInput("");
  // const password = useInput("");

  // const [emailDirty, setEmailDirty] = useState(false);
  // const [passwordDirty, setPasswordDirty] = useState(false);
  // const [emailError, setEmailError] = useState("E-mail не может пустым");
  // const [passwordError, setPasswordError] = useState("Пароль не может пустым");

  //   const blurHandler =(e: any)=> {
  //     switch(e.target.name) {
  //       case "email":
  //         setEmailDirty(true)
  //         break
  //       case "password":
  //         setPasswordDirty(true)
  //         break
  //   }
  // }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          color: "black",
          borderColor: "black",
        }}
      >
        Войти
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Вход</DialogTitle>
        <DialogContent>
          <input
            // onChange={(e) => email.onChange(e)}
            // onBlur={(e) => email.onBlur(e)}
            // value={email.value}
            name="email"
            type="text"
            placeholder="Введите свой E-mail"
          />
          <input
            // onChange={(e) => password.onChange(e)}
            // onBlur={(e) => password.onBlur(e)}
            // value={password.value}
            name="password"
            type="text"
            placeholder="Введите свой пароль"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button onClick={handleClose}>Войти</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default LoginForm;
