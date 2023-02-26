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

_build.infra:
	cd deployment && terraform apply

_deploy.front:
	@echo "Deploy react app build on aws s3 ..."
	yarn --cwd front run build
	aws s3 sync front/build/ s3://tennis-player-stats
