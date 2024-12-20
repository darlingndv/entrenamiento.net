# Usa una imagen base de Node.js 16
FROM cypress/base:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json desde el directorio raíz del proyecto
COPY ../package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación desde el directorio raíz del proyecto
COPY ../ .

# Ejecuta la interfaz de Cypress
CMD ["npx", "cypress", "run"]