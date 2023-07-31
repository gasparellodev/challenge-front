"use client";
import { loginImages } from "@/assets";
import { Button } from "@/components/buttons";
import { Input } from "@/components/inputs";
import { BrandLogin } from "@/components/svg-components/brand-login";
import { PlaneCursor } from "@/components/svg-components/plane-cursor";
import { Toast } from "@/components/toasted";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [status, setStatus] = useState(false);
  const [toast, setToast] = useState(false);
  const [email, setEmail] = useState("");

  const handleSendToken = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 10000);
  };

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="absolute w-972 h-440 z-10">
        <div className="flex flex-row w-full gap-40">
          <div className=" flex-1 flex-col">
            <BrandLogin className="items-end" />
            <h2 className=" text-right font-roboto text-[39px] text-white">
              Seja bem vindo à<br />
              <em className="text-right text-primary text-[39px]">
                Área do aluno
              </em>
            </h2>
          </div>
          <div className="flex-1">
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
          title={status ? "Token enviado!" : `Erro ao enviar o token!`}
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
