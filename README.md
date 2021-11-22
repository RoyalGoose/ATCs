# Контрольная работа
По предмету **Технологии разработки web приложений**

## Описание

В связи с тем, что в работе было решено использовать **VUE 3** архитектура приложения немного поменялась по отношению к требуемой в задании.

В папке `frontend` находится *development* версия проекта. В папке `backend` находится *express.js* сервер, а также *build* версия проекта `/backend/public`


## Запуск *build* версии проекта

```bash
# Открыть папку backend
cd backend

# Установить зависимости
npm i

# Запустить Express сервер: http://localhost:5000
npm start
```
## Запуск *development* версии проекта
```bash
# Открыть папку frontend
cd frontend

# Установить зависимости
npm i

# Запустить Vue DevServer: http://localhost:8080
npm run serve

# При необходимости забилдить проект
npm run build
```

### Автор
RoyalGoose aka VN