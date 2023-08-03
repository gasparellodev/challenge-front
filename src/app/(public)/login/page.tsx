"use client";
import { loginImages } from "@/assets";
import { Button } from "@/components/buttons";
import { Input } from "@/components/inputs";
import { ArrowDoor } from "@/components/svg-components/arrow-door";
import { BrandLogin } from "@/components/svg-components/brand-login";
import { DeleteAccount } from "@/components/svg-components/delete-account";
import { GoBack } from "@/components/svg-components/go-back";
import { MailIcon } from "@/components/svg-components/mail-icon";
import { PlaneCursor } from "@/components/svg-components/plane-cursor";
import { Toast } from "@/components/toasted";
import Image from "next/image";
import {
  ChangeEvent,
  useRef,
  useState
} from "react";

const dataMock = [
  {
    name: "Joao Santos",
    email: "johndue@gmail.com",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHMXuKFlW-Wsg/profile-displayphoto-shrink_800_800/0/1668219599625?e=2147483647&v=beta&t=v5j5kCUfjfC5IctNYRYqMIMp6PxJduNzqrhGdzA4icc",
  },
  {
    name: "Joao Santos",
    email: "johndue@gmail.com",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHMXuKFlW-Wsg/profile-displayphoto-shrink_800_800/0/1668219599625?e=2147483647&v=beta&t=v5j5kCUfjfC5IctNYRYqMIMp6PxJduNzqrhGdzA4icc",
  },
];

export default function LoginPage() {
  const [status, setStatus] = useState(false);
  const [toast, setToast] = useState(false);
  const [email, setEmail] = useState("");
  const [layer, setLayer] = useState<number>(3);
  const [inputValues, setInputValues] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleLayer = (n: number) => {
    setLayer(n);
  };

  const handleSendToken = () => {
    if (layer === 1) {
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 10000);
    } else if (layer === 2) {
      setToast(true);
      setTimeout(() => {
        setToast(true);
      }, 10000);
    }
  };

  const FirstLayer = () => {
    return (
      <div className="flex-1 p-5 md:p-0">
        <h2 className="text-base mb-10">Acesse usando seu e-mail.</h2>
        <Input
          handleChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          title="E-mail"
          placeHolder="Insira seu e-mail de acesso..."
          className="mb-10"
        />
        <Button
          handleClick={handleSendToken}
          theme={"primary"}
          icon={<PlaneCursor />}
          label="Enviar token de acesso"
          height="48px"
          width="253px"
        />
      </div>
    );
  };

  const SecondLayer = () => {
    const autoTab = async (
      e: React.KeyboardEvent<HTMLInputElement>,
      index: number
    ) => {
      if (e.code === "46") {
        const element = document.querySelector<HTMLInputElement>(
          `#input-sms-code-${index - 1}`
        );

        inputValues[index + 1] && element?.autofocus;

        element?.focus();
      } else {
        const element = document.querySelector<HTMLInputElement>(
          `#input-sms-code-${index}`
        );

        !!inputValues[index - 1] && element?.autofocus;

        element?.focus();
      }
    };

    const handleSmsCode =
      (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = value;
          return newValues;
        });

        // Move o foco para o próximo input se o valor digitado for um número
        if (/^\d$/.test(value) && index < inputRefs.length - 1) {
          inputRefs[index].current?.focus();
        }
      };
    return (
      <div className="flex-1 p-5 md:p-0">
        <button tabIndex={30} onClick={() => handleLayer(1)}>
          <h2 className="text-base mb-10 flex items-center  gap-3">
            <GoBack />
            Voltar
          </h2>

          <h3 className="font-bold text-[30px] text-left">
            Insira o token de acesso
          </h3>
          <p className="font-semibold text-left text-[#E7E7E7]">
            Para confirmar a sua identidade, digite o código que enviamos para o
            seu e-mail jhondoe@gmail.com
          </p>
        </button>
        <div id="otp" className="flex flex-row justify-start text-left  mt-5">
          {inputValues.map((key, index) => {
            return (
              <input
                className={`outline-none bg-transparent text-[white] m-2 border h-[48px] w-10 text-center form-control rounded ${
                  inputValues[index] && "border-primary"
                }`}
                type="text"
                id={`input-sms-code-${index}`}
                maxLength={1}
                ref={inputRefs[index]}
                onChange={handleSmsCode(index)}
                value={inputValues[index]}
                onKeyUp={(e) => autoTab(e, index)}
                autoFocus={!!inputValues[index - 1] && true}
                tabIndex={index}
              />
            );
          })}
        </div>
        <Button
          label="Reenviar token (25s)"
          className="border-none bg-transparent hover:bg-transparent text-primary hover:text-white pt-5 pb-5"
          icon={<PlaneCursor />}
        />
        <Button
          handleClick={handleSendToken}
          theme={"primary"}
          label="Continuar"
          height="48px"
          width="145px"
          className="mt-[24px]"
        />
      </div>
    );
  };

  const LastLayer = () => {
    return (
      <div className="p-5 md:p-0 flex-1">
        <button tabIndex={30} onClick={() => handleLayer(2)}>
          <h2 className="text-base mb-10 flex items-center  gap-3">
            <GoBack />
            Voltar
          </h2>
        </button>

        <h3 className="font-bold text-[30px] text-left">
          Contas salvas no dispositivo
        </h3>
        <p className="font-semibold text-left text-[#E7E7E7] mb-5">
          Entre com uma das contas salvas ou faça login em uma outra conta.
        </p>

        {dataMock.map((e) => (
          <div className="w-full p-5 flex items-center justify-between bg-[#222429] rounded mb-5">
            <div className="flex ">
              <img
                className="rounded-full border-solid border-primary border-[2px] mr-5"
                alt={e.name}
                src={e.image}
                width={52}
                height={52}
              />
              <div>
                <p>{e.name}</p>
                <p className="text-[#D1D1D1] flex items-center">
                  <MailIcon className="mr-2 max-w-[200px]" />
                  {e.email}
                </p>
              </div>
            </div>
            <button>
              <DeleteAccount />
            </button>
          </div>
        ))}

        <Button
          handleClick={handleSendToken}
          theme={"primary"}
          label="Fazer login com outra conta"
          height="48px"
          width="300px"
          icon={<ArrowDoor />}
          className="mt-[24px]"
        />
      </div>
    );
  };

  const renderLayer = (layer: number) => {
    switch (layer) {
      case 1:
        return <FirstLayer />;
      case 2:
        return <SecondLayer />;
      case 3:
        return <LastLayer />;
    }
  };
  return (
    <section className="w-full h-screen flex justify-center items-center">
    <div className="absolute w-full h-full z-10 flex items-center">
      <div className="flex flex-col md:flex-row w-full gap-40">
        <div className="flex-1 hidden md:flex flex-col items-center">
          <BrandLogin />
          <h2 className="text-center font-roboto text-[39px] text-white">
            Seja bem vindo à<br />
            <em className="text-primary text-[39px]">Área do aluno</em>
          </h2>
        </div>

        {layer && renderLayer(layer)}
      </div>
    </div>
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        alt="Mountains"
        src={loginImages.background}
        layout="fill"
        objectFit="cover"
      />
    </div>

    {toast && (
      <Toast
        status={false}
        title={status ? "Token enviado!" : "Erro ao enviar o token!"}
        description={
          status
            ? "Um token de acesso foi enviado para o seu e-mail, utilize o mesmo para acessar nosso sistema."
            : "Ocorreu um problema ao enviar o token de acesso para o seu e-mail, tente novamente mais tarde."
        }
        handleClose={() => {
          setToast(false);
        }}
      />
    )}
  </section>
  );
}
