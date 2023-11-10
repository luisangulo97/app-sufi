import React from "react";
import { InputText } from "primereact/inputtext";
import { useForm, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

export default function LoginForm({ login }) {
  const { handleSubmit, control } = useForm();
  return (
    <div className="login-form">
      <form className="form-container" onSubmit={handleSubmit(login)}>
        <div className="login-form__content">
          <Controller
            name="email"
            control={control}
            rules={{ required: "Valor requerido" }}
            render={({ field, fieldState }) => (
              <div>
                <InputText
                  className={classNames("input", {
                    "p-invalid": fieldState.error,
                  })}
                  id={field.name}
                  placeholder="Usuario"
                  type="email"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                />
                {fieldState.error && (
                  <small className="text-red-600">Campo requerido</small>
                )}
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: "Valor requerido" }}
            render={({ field, fieldState }) => (
              <div>
                <Password
                  id={field.name}
                  value={field.value}
                  className={classNames("input", {
                    "p-invalid": fieldState.error,
                  })}
                  placeholder="Contraseña"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  feedback={false}
                />
                {fieldState.error && (
                  <small className="text-red-600">Campo requerido</small>
                )}
              </div>
            )}
          />
        </div>
        <Button className="btn" label="INGRESAR" />
      </form>
    </div>
  );
}
