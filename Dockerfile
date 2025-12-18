# Étape 1 : Build de l'application React
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serveur Web léger (Nginx) pour servir les fichiers statiques
FROM nginx:alpine
# Copie les fichiers du dossier 'dist' (généré par Vite) vers le dossier HTML de Nginx
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]