import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link as MaterialLink,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Checkbox from "../../components/Checkbox";

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => console.log(data);

  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: "1", bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign In
        </Typography>
        <Box
          onSubmit={handleSubmit(handleLogin)}
          component="form"
          sx={{ mt: 1 }}
        >
          <TextField
            {...register("email")}
            margin="normal"
            fullWidth
            label="Email"
            helperText={errors.email?.message}
            error={!!errors.email?.message}
          />
          <TextField
            {...register("password")}
            margin="normal"
            fullWidth
            label="Senha"
            type="password"
            helperText={errors.password?.message}
            error={!!errors.password?.message}
          />
          <Checkbox />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
            Enviar
          </Button>
          {/* xs < 768, sm 768 e 962px, md 992px ate 1200px e o lg >1200*/}
          <Grid container xs={12} sx={{ mt: 1 }}>
            <Grid item xs>
              <MaterialLink>Esqueceu a senha?</MaterialLink>
            </Grid>
            <Grid item>
              <MaterialLink>Não tem uma conta? Faça seu cadastro</MaterialLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
