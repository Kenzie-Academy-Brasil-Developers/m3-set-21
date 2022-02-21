import { Container, Image, CardFooter } from "./styles";
import IconButton from "../IconButton";

const Card = () => {
  return (
    <Container>
      <Image>
        <img
          alt="Panificadora"
          src="https://s3-alpha-sig.figma.com/img/3f68/23d9/5b516c63751558003e2f3aee94c50e0f?Expires=1646611200&Signature=KfXZSMkzibS0RV8C~9rq8Om-UpzVydTNLR0fyq-qSC1l-Ox9uF5~3y~MyiLkdO7Mh3gEb~JhF4Y4oEi5NcBqBLAva-S7vNqfCUJxjy8vwKkMBzdf2Xu5w7B2PBZGuX5D7eCbust7gvedUA1yY1-mfvTVuFbSy-YjVjba-fpTX~v7w4BxfGs1pC-jDkyvyvc37CKkBbYHE6s1m2E5LpQ7mm-khbsTwYWt2vFcoj3DaYsKBrGhPxy49n93OnXfCa3xnTdKuYDPX62GQmFywjIPOwsJU53fwSUG-x8Py17ZT4qmc~HLaHW6OYonQZSxcSQb6lWHK7NIp2DAjTC0ZFmUyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <div>Panificadora</div>
      </Image>
      <section>
        <h1>Panqueca de banana com aveia</h1>
        <span>
          Esta receita serve muito bem 2 pessoas, deixa a gente bem satisfeito,
          se não tiver outra opção de café. Se tiver mais comida, como pães e
          frutas.
        </span>
      </section>

      <CardFooter>
        <strong>R$ 20,00</strong>
        <IconButton />
      </CardFooter>
    </Container>
  );
};

export default Card;
