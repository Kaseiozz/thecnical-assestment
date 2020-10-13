.DEFAULT_GOAL=help

# Define you variables here.
env?=
options?=

# Commands start here.

# This command is already able to parse the current file
# and display any comment that starts with "##" placed after
# an instruction.
#
# Ex: instruction: ## explanation 
.PHONY: help
help: ## Display the list of available commands.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: install
install: ## Install project dependencies.
	yarn install

.PHONY: setup
setup: ## Prepare the data.
	@echo "See \`.envrc.dist\` and \`./scripts\` to set up index"

.PHONY: clean
clean: ## Completely clean the local installation and setup
	@rm -rf ./node_modules

.PHONY: serve 
serve: ## Build the project for the local environment.
	@echo "Starting server on http://localhost:3000"
	yarn start
