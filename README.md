# edumelo.dev

Site pessoal / portfólio do Eduardo Melo — Dev Fullstack.
Next.js 16 + React 19 + Tailwind CSS v4.

## Rodar

Precisa de Node.js 20+.

    npm install
    npm run dev

Abra http://localhost:3000.

## Editar

Quase tudo fica em `app/data.ts` (perfil, métricas, sistemas, links).
Cores em `app/globals.css` (bloco `:root`).

## Publicar (Vercel)

1. Push para um repositório no GitHub.
2. vercel.com → login com GitHub → Add New → Project → escolher o repo → Deploy.
3. Cada push atualiza o site. Domínio próprio em Settings → Domains.
