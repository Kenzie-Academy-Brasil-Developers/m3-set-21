import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { secondary, secondary50 } from "../../styles/global";
import { Container, ContainerMessage, Form } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
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

  const handleLogin = (data) => console.log(data);

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
