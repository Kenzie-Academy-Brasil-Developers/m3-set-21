import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { secondary, secondary50 } from "../../styles/global";
import { Container, ContainerMessage, Form } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Login = ({ auth, setAuth }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  const handleLogin = async (data) => {
    const response = await api.post("/login", data).catch((err) => {
      toast.error("Erro na autenticação, verifique suas credenciais");
    });

    const { user, accessToken } = response.data;

    localStorage.setItem("@KenzieFood:token", accessToken);
    localStorage.setItem("@KenzieFood:user", JSON.stringify(user));

    toast.success("Login feito com sucesso!");

    setAuth(true);
    history.push("/dashboard");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Input
          name="email"
          register={register}
          label="Email"
          placeholder="email@exemplo.com"
          error={errors.email?.message}
        />
        <Input
          name="password"
          register={register}
          label="Senha"
          placeholder="Sua senha"
          type="password"
          error={errors.password?.message}
        />
        <Button type="submit" backgroundColor={secondary}>
          Enviar
        </Button>

        <ContainerMessage>
          <strong>Não tem uma conta ainda? </strong>
        </ContainerMessage>

        <Button type="button" backgroundColor={secondary50}>
          Cadastre-se
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
