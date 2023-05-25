SHELL=/bin/bash
RED=\033[0;31m
GREEN=\033[0;32m
NC=\033[0m # No Color

envFileLoc = "$(PWD)/configs/envs/local.env"
envFileProd = "$(PWD)/configs/envs/production.loc.env"

.PHONY: help

help:
	@echo OleksiiHonchar.com automation commands:
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(firstword $(MAKEFILE_LIST)) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean-dist:  ## Cleaning ./dist folder
	@printf "${RED}Cleaning ./dist folder:${NC}"
	@rm -rf ./dist
	@printf "${RED}DONE${NC}\n"
.PHONY: clean-dist

build-loc: clean-dist ## Build local version
	@npx env-cmd -f $(envFileLoc) "$(PWD)/devops/local/scripts/check-env-vars.sh"
	@source $(envFileLoc)
	@npx env-cmd -f $(envFileLoc) webpack \
		--config ./configs/webpack.config.js \
		--mode development \
		--env BUILD_ANALYZE=$(BUILD_ANALYZE)
	@printf "${GREEN}build-loc: DONE${NC}\n"

build: clean-dist ## Build production version
	@npx env-cmd -f $(envFileProd) "$(PWD)/devops/local/scripts/check-env-vars.sh"
	@source $(envFileProd)
	@npx env-cmd -f $(envFileProd) webpack \
		--config ./configs/webpack.config.js \
		--mode production \
		--env BUILD_ANALYZE=$(BUILD_ANALYZE)

	@printf "${GREEN}build: DONE${NC}\n"

launch-dev-server: ## Launches local Webpack dev-server
	@npx env-cmd -f $(envFileLoc) "${PWD}/devops/local/scripts/check-env-vars.sh"
	@source ${envFileLoc}
	@npx env-cmd -f ${envFileLoc} webpack-dev-server \
		--config ./configs/webpack.config.js \
		--mode development \
		--env BUILD_ANALYZE=false \
		--open
