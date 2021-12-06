# ProtonMail website

This is a replica of ProtonMail's website (protonmail.com), made in [Next.js][next.js homepage], the React Framework for Production.

## Demo

After each push to `develop`, [Vercel][vercel homepage] builds a demo, which becomes available at [protonmail-website-dev.demo.ricardo.nu](https://protonmail-website-dev.demo.ricardo.nu).

## Getting started

The recommended way to run this package is with Docker.

### Docker instructions

- Clone this repository
- Build the Docker image
  ```sh
  docker build -t ricardobalk/protonmail-website .
  ```
- Run the image inside a container
  ```sh
  docker run --rm -p 3000:3000 -it ricardobalk/protonmail-website
  ```

### Alternative instructions

If you don't have Docker or don't want to use it, you can run Node locally. Make sure that you have a proper installation of Node (12.x+), have set up the correct environment variables, etc.

**Installing the dependencies**

```sh
yarn
# or: npm install
```

**Running a development server**

```sh
yarn dev
# or: npm run dev
```

**Building the website**

```sh
yarn build
# or: npm run build
```

## Contributing

You can contribute to this project by submitting pull requests on GitHub. Not sure what to work on? Take a look at the issues and discussions.

## Disclaimer

This project is purely intended for research purposes.

[next.js homepage]: https://nextjs.org/ "Homepage of Next.js, the React Framework for Production."
[vercel homepage]: https://vercel.com/ "Homepage of Vercel"
