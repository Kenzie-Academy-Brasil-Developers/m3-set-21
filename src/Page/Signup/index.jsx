import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const signupSchema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const history = useHistory();

  const handleCreateUser = async (data) => {
    delete data.confirm_password;

    const response = await api.post("/users/", data).catch((err) => {
      toast.error("Aconteceu algum erro, tente outro username");
    });

    console.log(response.data);

    toast.success("Conta criada com sucesso");

    history.push("/");
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleCreateUser)}>
      <input {...register("username")} placeholder="Nome de usuário" />
      <p>{errors.username && errors.username.message}</p>{" "}
      {/* mesma coisa que errors.username?.message */}
      <input {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>
      <input {...register("password")} placeholder="Senha" type="password" />
      <p>{errors.password?.message}</p>
      <input
        {...register("confirm_password")}
        placeholder="Confirme a senha"
        type="password"
      />
      <p>{errors.confirm_password?.message}</p>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Signup;
