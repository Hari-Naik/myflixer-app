FROM node:20-alpine

WORKDIR /app

COPY  package*.json ./

RUN npm install

COPY . .

ENV MONGODB_URL=mongodb+srv://harinaik:YN9xZt9aFCqdLsFA@cluster0.t4kq7ej.mongodb.net/?retryWrites=true&w=majority
ENV NEXTAUTH_SECRET=jbfgygbrwtauek
ENV NEXTAUTH_URL=http://localhost:3004/
ENV PORT=3004

EXPOSE 3004

CMD npm run dev