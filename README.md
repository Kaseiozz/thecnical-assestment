## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

Core install, setup and test operations have appropriate wrappers in
[Makefile](./Makefile). This allows us to have setup consistency across projects
in different languages/stacks.

Application does not however need container and you can simply running it via starting the server through Yarn. (yarn start)


## Point of Contact

- **Adam Zabinski** - _Author_ - [info@adamzabinski.com](mailto:info@adamzabinski.com)

### Prerequisites

I primarily support local development on Mac and Linux. If you want to use Win
for development on this project, you will need to invest a bit of time in
bootstraping your local dev environment.

To set up the project locally on Mac or Linux, the only one prerequisite:

- [GNU Make](https://www.gnu.org/software/make/manual/make.html) - Command
  runner. ([Mac (Homebrew)](http://brewformulas.org/Make),
  [Linux (Ubuntu)](https://askubuntu.com/questions/161104/how-do-i-install-make#answer-272020)).

Install the above and the follow-up set up process should run without issues. If
you do stumble upon issues, please reach out to this project' technical point of
contact.

For Windows:

-[Node](https://nodejs.org/en/download/) -[SSH](https://www.howtogeek.com/336775/how-to-enable-and-use-windows-10s-built-in-ssh-commands/) -[yarn](https://www.npmjs.com/package/yarn)

### Environment variables

This project uses environment variables for all runtime configuration. You can
find an example of all used environment variables in
[`.envrc.dist`](./.envrc.dist).

### Installing

To install all the project dependencies, simply run:

```
make install
```

Windows:

```
yarn install
```

## Running the project locally

To run the project locally, run:

```
make serve
```

Windows:

```
yarn start
```

## API Endpoint URL

Single endpoint returning stat data

```
http://localhost:3000/api/stats
```

## Troubleshooting

- Ensure all required environment variables have been set.
- Check if port 3000 has not been used by another application.
