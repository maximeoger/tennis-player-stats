_start.server:
	npx pm2 start server/app/app.js --watch

_start.front:
	npx pm2 start "yarn start" --cwd front --name front

_install.front:
	yarn --cwd front install

_install.server:
	yarn --cwd server install

_log:
	npx pm2 log

_delete_all:
	npx pm2 delete all

install:
	@make _install.server
	@make _install.front

start:
	@make _start.server
	@make _start.front
	@make _log

stop:
	@make _delete_all

restart:
	@make _delete_all
	@make start