"use client";

import { useState, useEffect } from "react";

const PasswordGeneratorForm = () => {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [showToast, setShowToast] = useState<boolean>(false);

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";
    let chars = "";

    if (includeUppercase) chars += upper;
    if (includeLowercase) chars += lower;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (!chars) return "";

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  };

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(password).then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = password;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  useEffect(() => {
    setPassword(generatePassword());
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-white select-none relative px-4 sm:px-6">
      {/* Toast */}
      {showToast && (
        <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 bg-[#0352D1] text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md shadow-md animate-fade-in-out">
          ✅ Contraseña copiada
        </div>
      )}

      <section className="w-full max-w-md p-4 sm:p-6 bg-gray-100 rounded-xl shadow-[20px_5px_30px_rgba(0,0,0,0.4)] border border-gray-200">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-800">
          Generador de contraseñas
        </h1>

        {/* Input + generar */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={password}
            readOnly
            onClick={handleCopy}
            className="
              flex-1 px-3 py-2 border rounded-lg text-sm sm:text-base
              hover:border-[#0352D1]
              focus:outline-none
              focus:border-transparent
              focus:ring-2
              focus:ring-[#0352D1]
            "
            placeholder="Contraseña generada"
          />

          <button
            type="button"
            onClick={() => setPassword(generatePassword())}
            className="px-3 sm:px-4 py-2 bg-[#0352D1] text-white font-medium rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Generar
          </button>
        </div>

        {/* Personalización */}
        <div className="mt-6 p-3 sm:p-4 border rounded-lg bg-gray-50">
          <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
            Personalizar contraseña
          </h2>

          {/* Longitud */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Longitud: {length}
            </label>
            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-[#0352D1]"
            />
          </div>

          {/* Opciones */}
          <div className="space-y-2 text-gray-700 text-sm sm:text-base">
            <label className="flex items-center gap-2 select-none">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="accent-[#0352D1]"
              />
              <span>Incluir mayúsculas (A–Z)</span>
            </label>

            <label className="flex items-center gap-2 select-none">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="accent-[#0352D1]"
              />
              <span>Incluir minúsculas (a–z)</span>
            </label>

            <label className="flex items-center gap-2 select-none">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="accent-[#0352D1]"
              />
              <span>Incluir números (0–9)</span>
            </label>

            <label className="flex items-center gap-2 select-none">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="accent-[#0352D1]"
              />
              <span>Incluir símbolos (!@#$%^&*)</span>
            </label>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PasswordGeneratorForm;
