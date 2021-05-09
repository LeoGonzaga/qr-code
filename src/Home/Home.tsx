import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  Image,
  Input,
  Button,
  Title,
  Loading,
  Notification,
} from "./styled";

const API = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const Home: React.FC = () => {
  const [text, setText] = useState("");
  const [linkImg, setlinkImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);
  const [disable, setDisable] = useState(false);

  const createLink = useCallback(async () => {
    try {
      if (text.length > 5) {
        setLoading(true);
        let response = await fetch(`${API}${text}`);
        setlinkImg(response.url);
      } else {
        activeNotification();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setText("");
    }
  }, [text]);

  const activeNotification = useCallback(() => {
    setNotification(true);

    const interval = setTimeout(() => {
      setNotification(false);
    }, 2000);

    return () => {
      clearTimeout(interval);
    };
  }, [text, notification]);

  useEffect(() => {
    setDisable(text.length < 1 ? true : false);
    
  }, [text]);

  return (
    <Container>
      {notification && (
        <Notification>
          Por favor, digite o link que deseja usar para criar o QR CODE.
        </Notification>
      )}
      <Wrapper>
        <Title>QR CODE Generetor</Title>

        {!loading ? (
          <Image
            src={
              linkImg.length > 0
                ? linkImg
                : "https://upload.wikimedia.org/wikipedia/commons/3/37/MITC2013_QR_Code.jpg"
            }
          />
        ) : (
          <Loading />
        )}

        <Input
          placeholder="Digite o link que deseja gerar"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={createLink} disabled={disable}>
          Gerar QRCODE
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Home;
