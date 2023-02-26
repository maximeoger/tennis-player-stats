install:
	@make _install.server
	@make _install.front

start:
	@echo "Starting all ..."
	@make _start.server
	@make _start.front
	@make _log

stop:
	@echo "Stopping all ..."
	@make _delete_all

restart:
	@make _delete_all
	@make start

test:
	@make _test.front
	@make _test.server

build-infra:
	@make _build.infra

deploy:
	@make _deploy.front

include tools/makefiles/setup.Makefile