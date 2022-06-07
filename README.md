# Proton Website

This is a replica of Proton's website (proton.me), made with [Nuxt 3][], [Tailwind CSS][] and [Storyblok][].

# Getting started

For starting the dev server, you have multiple options...

Online:

- [Stackblitz](https://stackblitz.com/github/ricardobalk/proton-website)
- [GitHub Codespaces](https://github.dev/ricardobalk/proton-website)
- [VSCode for the web](https://vscode.dev/github/ricardobalk/proton-website)

On your own machine:

- VSCode with Dev Container
- Docker Compose
- Docker
- Local Node.js installation

**Docker Compose**
```sh
docker-compose up -f docker-compose.dev.yml
```

Removal:

```sh
docker-compose down --rmi all
```

**Docker**

If you don't have Docker Compose, but have Docker, try this:

```sh
docker build --target development -t proton-website . && \
docker run --rm -p 3000:3000 -it proton-website
```

Removal:

```sh
docker image rm proton-website
```

**Without Docker**

You can also use your local installation Node.js, of course.

```sh
yarn && yarn dev
# or: npm install && npm run dev
```

# Disclaimer

This project is purely intended for research purposes. I'm not affiliated with [Proton][] and this project is not endorsed by [Proton][] in any way.

<small>However, I would not mind being hired as an active employee at Proton in the future. [Reach out to me][gh:ricardobalk].</small>

[Nuxt 3]: https://v3.nuxtjs.org/ "Landing page of Nuxt 3, the Hybrid Vue Framework"
[Tailwind CSS]: https://tailwindcss.com/ "Tailwind CSS: A utility-first CSS framework"
[Storyblok]: https://www.storyblok.com/ "Storyblok: A headless CMS"
[Proton]: https://proton.me/ "Website of Proton Technologies A.G., the company behind ProtonMail and other online services."
[gh:ricardobalk]: https://github.com/ricardobalk