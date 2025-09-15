"use client";

const PasswordGeneratorForm = () => {
  return (
    <main>
      <section>
        <h1>Generador de contraseñas</h1>

        {/* Input con botón copiar */}
        <div>
          <input type="text" readOnly />
          <button>Copiar</button>
        </div>
        <button>Generar contraseña</button>
      </section>
    </main>
  );
};

export default PasswordGeneratorForm;
